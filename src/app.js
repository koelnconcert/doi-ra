var request = require('request');
var connect = require('connect');
var express = require('express');
var cache_function = require('./cache-function');

var settings = {
    port : 9999
}

var ras = require('./ras.js');

var servers = {};

for (ra in ras) {
    console.log(ra);
    ras[ra].servers.forEach(function(server) {
        servers[server] = ra;
    });
}
console.log(ras);
console.log(servers);


var controller = {};

controller.index = function(req, res) {
    res.json(settings);
}

function get_server(prefix, callback) {
    var url = "http://hdl.handle.net/api/0.NA/" + prefix + "?type=HS_SERV";
    request(url, function(error, response, body) {
        if (error || response.statusCode != 200) {
            callback('prefix does not exist');
        } else {
            var json = JSON.parse(body);
            var hs_serv = json.values[0].data;
            callback(null, hs_serv);
        }
    })
}

get_server = cache_function(get_server, {stdTTL: 24*60*60});

controller.prefix = function(req, res) {
    var prefix = req.params.prefix;
    if (!prefix.match(/^10\..+/))
        res.send(404, 'not a doi prefix')
    else 
        get_server(prefix, function(error, server) {
            if (error) 
                res.send(404, 'prefix not found')
            else {
                var ra = servers[server];
                if (ra == undefined) 
                    res.send(404, 'no registration agency known for this prefix')
                else 
                    res.redirect("/ra/" + ra);
            }
        })
}

controller.ra = function(req, res) {
    var ra = req.params.ra;
    if (ras[ra] == undefined) 
        res.send(404, 'unknown registration agency')
    else
        res.json(ras[ra]);
}

controller.doi = function(req, res) {
    prefix = req.params[0];
    res.redirect("/prefix/" + prefix)
}

controller.ras = function(req, res) {
    res.json(ras);
}

function init() {
	console.log("creating app...");
	var app = express();

    app.use(redirectIfTrailingSlash);
	
	app.get('/', controller.index);
	app.get(/^\/doi\/([^\/]*)/, controller.doi);
	app.get('/prefix/:prefix', controller.prefix);
	app.get('/ra/:ra', controller.ra);
	app.get('/ra', controller.ras);
	
	app.listen(settings.port);
	console.log("server listening on port " + settings.port + ".");
}

function redirectIfTrailingSlash(req, res, next) {
    if (req.path.match(".+/$"))
        res.redirect(req.path.slice(0,-1));
    else
        next();
}



init();
