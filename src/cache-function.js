var NodeCache = require('node-cache');

module.exports = function (func, opts) {
    var cache = new NodeCache(opts);
    return function(arg, callback) {
        cache.get(arg, function(err, result) {
            if (err) 
                callback(err)
            else {
                var hit = result[arg];
                if (hit) 
                    callback(hit.err, hit.result)
                else 
                    func(arg, function(err, result) {
                        cache.set(arg, {err: err, result: result});
                        callback(err, result)
                    })
            }
        })
    }
}
