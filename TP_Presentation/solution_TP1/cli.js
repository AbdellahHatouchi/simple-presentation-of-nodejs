const todos = require('./todos');

function runCommand(command, args) {
    if (command === 'create') {
        const todo = args[0];
        todos.createTodo(todo);
    } else if (command === 'read') {
        const allTodos = todos.getTodos();
        !allTodos.length ?
            console.log("Your todo list is Empty") :
            allTodos.forEach(todo => console.log(`${todo.id}. ${todo.todo}${todo.completed ? ' - Completed' : ''}`));
    } else if (command === 'update') {
        const id = args[0];
        const todo = (args[1] !== "null" && args[1] !== "_") && args[1];
        const isCompleted = (args[2] === "true" || args[2] === "y");
        todos.updateTodo(id, todo, isCompleted);
    } else if (command === 'delete') {
        const id = args[0];
        todos.deleteTodo(id);
    } else {
        console.log(`Unknown command: ${command}`);
    }
}

function parseArgs(rawArgs) {
    const command = rawArgs[0];
    const args = rawArgs.slice(1);
    return { command, args };
}
// console.log(process.argv);

const { command, args } = parseArgs(process.argv.slice(2));
runCommand(command, args);