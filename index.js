var port = process.env.PORT;
var db = process.env.DB;
var Hapi = require('hapi');
var server = new Hapi.Server(port);
//var Joi = require('joi');
var mongoose = require('mongoose');
mongoose.connect(db);
var home = require('./controllers/home');
//var tasks = require('/controllers/tasks');
//var priorities = require('/controllers/tasks');

server.route({
    config: {
        description: 'This is the default home page.'
    },
    method: 'GET',
    path: '/',
    handler: home.index
});


/*
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + request.params.name + '! ' + request.query.limit);
    },
    config: {
        validate: {
            params: {
                //should match the req.params
                //validates payloads(body), params, headers, queries
                name: Joi.string().min(3).max(10)
            },
            query: {
                limit: Joi.number().required().min(9)
            }
        }
    }
});

server.route({
    method: 'GET',
    path: '/images/{params*}', //as many slashes as you want
    handler: {
        directory: {
            path: 'static/images'
        }
    }
});

server.route({
    method: 'POST',
    path: '/dogs', //as many slashes as you want
    handler: function(request, reply){
        //just like req.body
        var doggy = new Dog(request.payload);
        doggy.save(function (err) {
            reply(doggy);
        });
    }
});
*/


//Loading plugins and THEN running a server
server.pack.register(
    [
        {
            plugin: require('good'),
            options: {
                reporters: [{
                    reporter: require('good-console'),
                    args:[{ log: '*', request: '*' }]
                }]
            }
        },
        {
            plugin: require('lout')
        }
    ], startServer);

//start hapi server
function startServer(err){
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
}