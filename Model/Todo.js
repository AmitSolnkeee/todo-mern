const mongoose = require('mongoose');


const TodoSchema = new mongoose.Schema({
    todoList : {
        type : String,
        required : [true, 'Todo List is required']
    },
    completed :{
        type : Boolean,
        default : false
    },
    timestamp :{
        type: String,
        default : Date.now()
    }
})

const Todo = mongoose.model('Todo' , TodoSchema);

module.exports = Todo;