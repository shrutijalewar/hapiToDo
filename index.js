var port = process.env.PORT;
var db = process.env.DB;
var Hapi = require('hapi');
var server = new Hapi.Server(port);
//var Joi = require('joi');
var mongoose = require('mongoose');
mongoose.connect(db);
var home = require('./controllers/home');
var tasks = require('./controllers/tasks');
var priorities = require('./controllers/tasks');


//HOME ROUTES
server.route({
    config: {
        description: 'This is the default home page.'
    },
    method: 'GET',
    path: '/',
    handler: home.index
});

server.route({
    method: 'GET',
    path: '/about',
    handler: home.about
});



//TASK ROUTES
server.route({
    method: 'GET',
    path: '/tasks',
    handler: tasks.all
});

server.route({
    method: 'POST',
    path: '/tasks',
    handler: tasks.create
});

server.route({
    method: 'PUT',
    path: '/tasks/{id}',
    handler: tasks.update
});

server.route({
    method: 'DELETE',
    path: '/tasks/{id}',
    handler: tasks.remove
});

server.route({
    method: 'GET',
    path: '/tasks/{id}',
    handler: tasks.show
});


//PRIORITY ROUTES
server.route({
    method: 'POST',
    path: '/priorities',
    handler: priorities.create
});

server.route({
    method: 'GET',
    path: '/priorities',
    handler: priorities.show
});



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