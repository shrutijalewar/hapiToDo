'use strict';
var Task = require('../models/task');

exports.all = function(request, reply){
    //Task.all();
    reply(request.payload);
};

exports.create = function(request, reply){
    Task.add(request.payload).then(function(task){reply('success')});
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