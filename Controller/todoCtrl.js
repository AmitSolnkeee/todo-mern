const Todo = require('../Model/Todo');
const validateMongodbId = require('../Validate/validateMongodbId');
const expressAsyncHandler = require('express-async-handler');

//Get all Todo list controller
const getTodoCtrl = async(req,res)=>{
    try {
        const todos = await Todo.find({});
        res.json(todos)
    } catch (error) {
        console.log(error)
    }
}

// Post new Todo to db controller
const postTodoCtrl = async(req,res)=>{
    try {
        const todo = await Todo.create({
            todoList : req?.body?.todoList
        })
        res.json(todo)
    } catch (error) {
        console.log(error)
    }
}

//Delete Todo by Id contoller
const deleteTodoCtrl = expressAsyncHandler(async(req,res)=>{
    const {id} = req?.params;
    validateMongodbId(id);
    try {
         const deletedResult = await Todo.findByIdAndDelete(id);
         res.json(deletedResult)
    } catch (error) {
        res.json(error)
    }
})

//Update Todo completed controller
const updateTodoCtrl = async(req,res)=>{
    const {id}= req?.params;
    try {
        const updateTodo = await Todo.findById(id);
        updateTodo.completed = !updateTodo.completed
        updateTodo.save();
        res.json(updateTodo)
    } catch (error) {
        res.json(error)
    }
};
 


module.exports = {getTodoCtrl , postTodoCtrl , deleteTodoCtrl,updateTodoCtrl}