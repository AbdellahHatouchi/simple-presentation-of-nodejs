# Exercise 1: Building a CLI Application for CRUD Operations using Node.js and the File System Module

## In this exercise, you will build a CLI (Command Line Interface) application to perform CRUD (Create, Read, Update, Delete) operations on a file using Node.js and the file system module.

1. Create a new file called todos.js.
2. Import the fs module in your code.
3. Define a function called createTodo that takes a todo parameter and adds it to a file called todos.json. If the file doesn't exist, create it and add the todo.
4. Define a function called getTodos that reads the contents of the todos.json file and returns an array of todos.
5. Define a function called updateTodo that takes an id parameter and a todo parameter and updates the todo with the given id in the todos.json file.
6. Define a function called deleteTodo that takes an id parameter and removes the todo with the given id from the todos.json file.
7. Export all the functions using the module.exports object.
8. Create a new file called cli.js.
9. Import the todos.js module in your code.
10. Define a function called runCommand that takes command and args parameters and handles each of the CRUD operations based on the command argument and its associated args.
11. Define a function called parseArgs that takes a rawArgs parameter and returns an object with the command and its associated args.
12. Parse the command line arguments using process.argv.slice(2) and pass them to parseArgs function.
13. Call the runCommand function to handle the command and its associated arguments.
14. Test your application by running it in the terminal using node cli.js command.