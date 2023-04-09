const fs = require('fs');

const filePath = './todos.json';

function createTodo(todo) {
    let todos = getTodos();
    const newTodo = {
        id: todos.length + 1,
        todo,
        completed: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    console.log('Todo added successfully!');
}

function getTodos() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const todos = JSON.parse(data);
        return todos;
    } catch (err) {
        return [];
    }
}

function updateTodo(id, todo, isCompleted) {
    let todos = getTodos();
    const todoToUpdate = todos.find(todo => todo.id === parseInt(id));
    if (!todoToUpdate) {
        console.log('Todo not found!');
    } else {
        if (todo) todoToUpdate.todo = todo;
        todoToUpdate.completed = isCompleted;
        saveTodos(todos);
        console.log('Todo updated successfully!');
    }
}

function deleteTodo(id) {
    let todos = getTodos();
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if (index === -1) {
        console.log('Todo not found!');
    } else {
        todos.splice(index, 1);
        saveTodos(todos);
        console.log('Todo deleted successfully!');
    }
}

function saveTodos(todos) {
    const data = JSON.stringify(todos);
    try {
        fs.writeFileSync(filePath, data);
    } catch (error) {
        console.log("500\nServer Error Please try again!");
    }
}

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
};