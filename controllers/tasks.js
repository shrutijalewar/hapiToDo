'use strict';
var Task = require('../models/task');

exports.all = function(request, reply){
    Task.all(function(err, tasks){
        reply(tasks);
    });

};

exports.create = function(request, reply){
    console.log(request.payload);
    Task.add(request.payload).then(function(task){
        reply('success');
    }, function(err){
        replay(err);
    });
};

exports.update = function(request, reply){
    //model;
    reply(request.payload);
};
exports.remove = function(request, reply){
    //model;
    reply(request.payload);
};
exports.show = function(request, reply){
    //model;
    reply(request.payload);
};