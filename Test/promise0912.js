/**
 * Created by alone on 2016/9/12.
 */
var fs = require('fs');
var path = require('path');
var Q = require('q');

var fs_readdir = Q.denodeify(fs.readdir)
var fs_stat = Q.denodeify(fs.stat)
//
var readstat = function (dir) {
    return fs_readdir(dir)
        .then(function (files) {
            var promise = files.map(function (file) {
                return fs_stat(path.join(dir, file))
            })
            return Q.all(promise).then(function (stats) {
                return [files, stats] // [3]
            })
        })
        .then(function (data) { // [4]
            var files = data[0]
            var stats = data[1]
            var largest = stats
                .filter(function (stat) {
                    return stat.isFile()
                })
                .reduce(function (prev, next) {
                    if (prev.size > next.size) return prev
                    return next
                })
            return files[stats.indexOf(largest)]
        })
};

readstat(__dirname).then(function (filename) {
    console.log(filename)
});