
'use strict';

var Priority = require('../models/priority');

exports.create = function (request, reply){
    Priority.add(request.payload, function(){
        reply('err');

    });
};


exports.show = function (request, reply){
    reply(200);
};