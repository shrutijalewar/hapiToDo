var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = mongoose.model('Task', {name: String, due: Date, priority: Schema.Types.ObjectId, isComp: Boolean, tags: [String] });


Task.add = function(o, cb) {
    return Task.create(t);
};

module.exports = Task;