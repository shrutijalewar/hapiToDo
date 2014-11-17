var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = mongoose.model('Task', {name: String, due: Date, priority: Schema.Types.ObjectId, isComplete: Boolean, tags: [String] });


Task.add = function(o) {
    return Task.create(o);
};

module.exports = Task;