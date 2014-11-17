/**
 * Created by Shruti on 11/17/14.
 */

'use strict';

//var Priority = require('../models/priority');

exports.create = function (request, reply){
    reply(200);
};


exports.show = function (request, reply){
    reply(request.payload);
};