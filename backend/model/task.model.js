const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'you must type name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 charaters']
    },

    completed: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    }
);


const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
