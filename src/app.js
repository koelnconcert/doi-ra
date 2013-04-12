var request = require('request');
var connect = require('connect');
var express = require('express');

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

controller.prefix = function(req, res) {
    var prefix = req.params.prefix;
    if (!prefix.match(/^10\..+/))
        res.send(404, 'not a doi prefix')
    else {
        var url = "http://hdl.handle.net/api/0.NA/" + prefix + "?type=HS_SERV";
        request(url, function(error, response, body) {
            if (error || response.statusCode != 200) {
                res.send(404, 'prefix does not exist');
            } else {
                var json = JSON.parse(body);
                var hs_serv = json.values[0].data;

                var ra = servers[hs_serv];
                if (ra == undefined) 
                res.send(404, 'no registration agency known for this prefix')
                else 
                    res.redirect("/ra/" + ra);
            }
        });
    }
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

function init() {
	console.log("creating app...");
	var app = express();
	
	app.get('/', controller.index);
	app.get(/^\/doi\/([^\/]*)/, controller.doi);
	app.get('/prefix/:prefix', controller.prefix);
	app.get('/ra/:ra', controller.ra);
	
	app.listen(settings.port);
	console.log("server listening on port " + settings.port + ".");
}

init();
