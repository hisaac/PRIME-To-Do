$(document).ready(function(){
  if(window.navigator.standalone === false){
    askToInstall();
  } else {
    getTodos();
  }
});

function askToInstall(){
  $('body').html('<h2>To install To→Do, please tap the \'share\' button below, and select \'Add to Home Screen\'.</h2>');
}

//gets all items from database
function getTodos(){
  // ajax GET
}

//appends all items to DOM
function appendTodos(){
  // jQuery .append()
}

//toggles completion of todo item
function toggleComplete(){
  // ajax PUT
}

//deletes item from DOM and database
function deleteTodo(){
  // ajax DELETE
}

//edit title of todo
function editTodo(){
  // ajax PUT
}
