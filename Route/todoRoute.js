const express = require('express');
const { getTodoCtrl, postTodoCtrl, deleteTodoCtrl, updateTodoCtrl } = require('../Controller/todoCtrl');


const todoRoute = express.Router();

todoRoute.get('/todo' , getTodoCtrl);

todoRoute.post('/todo' , postTodoCtrl);

todoRoute.delete('/todo/:id', deleteTodoCtrl);

todoRoute.put('/todo/:id' , updateTodoCtrl)


module.exports = {todoRoute}