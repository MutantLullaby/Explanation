angular.module("todoApp", []) //the start of the coding where it helps the program know what it is and what base you will be using to code
.controller("TodoListController", function($scope) { //the control is there to control the data and the funtion tells the data how to act
  var todoList = this;  //var controls the names/numbers and adds intrustutions to make it do a certain thing 
  todoList.todoItems = [
    { name: "Go to school", done: false }, //this is the name of the example place holders within the program each one has a differnt name but they both will funtion the same way that meaning that
    { name: "Eat lunch", done: false },    //this is the name of the example place holders within the program each one has a differnt name but they both will funtion the same way that meaning that
    { name: "Do laundry", done: false },   //this is the name of the example place holders within the program each one has a differnt name but they both will funtion the same way that meaning that
    { name: "Shopping", done: false }      //this is the name of the example place holders within the program each one has a differnt name but they both will funtion the same way that meaning that
  ]

  todoList.addTodo = function() {
    todoList.todoItems.push( //this is where the to do list pushes up what you type
      { name: todoList.todoText }
    )
    todoList.todoText = ""; // "" is where you can let whatever the user type to be valid
  };

 todoList.remove = function() {  //he is where you can be able to remove what was typed
    console.log('remove function fired'); //the funtion should be fired meaning to be able to use the remove
    var oldTodos = todoList.todoItems;
    todoList.todoItems = []; 
    angular.forEach(oldTodos, function(todo) { //this has it where it connects to angular
      if(!todo.done) todoList.todoItems.push(todo); //this does something almost like an equation and "what if" thing
    })
    todoList.todoItems
  };

todoList.remaining = function() {  //the remainthing stays and you are able to manage the list
    var notCompletedCount = 0; // this keeps track of the count of things in your list
    angular.forEach(todoList.todoItems, function(todo) {
      notCompletedCount += todo.done; // the count is infante so it never ends
    })

    return notCompletedCount   //there is no definate count
  }
}); //end to do