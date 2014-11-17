var db = process.env.DB;
var mongoose = require('mongoose');

mongoose.connect(db);

var schema = new mongoose.Schema({name: String, color: String});
var Priority = mongoose.model('Priority', schema);

Priority.add = function(obj, cb){
    Priority.create(obj, cb);
};

Priority.show = function(){

};