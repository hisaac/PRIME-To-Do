$(document).ready(function(){
  if(window.navigator.standalone === false){
    askToInstall();
  } else {
    getTodos();
    checkYear();
  }
});

function askToInstall(){
  $('body').html('<h2>To install To→Do, please tap the \'share\' button below, and select \'Add to Home Screen\'.</h2>');
}

// gets all items from database
function getTodos(){
  // ajax GET
}

// checks current year to hard coded start year in footer,
// and appends if necessary
function checkYear(){
  if ($('#thisYear').text() !== (new Date).getFullYear().toString()){
    $('#thisYear').append('–' + (new Date).getFullYear());
  }
}

// appends all items to DOM
function appendTodos(){
  // $('main').append(
  //
  // )
}

// toggles completion of todo item
function toggleComplete(){
  // ajax PUT
}

// deletes item from DOM and database
function deleteTodo(){
  // ajax DELETE
}

// edit title of todo
function editTodo(){
  // ajax PUT
}
