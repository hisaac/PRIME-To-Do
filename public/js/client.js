var testing = true;

$(document).ready(function(){
  if (testing === true){
    getTodos();
    checkYear();
  } else {
    if(window.navigator.standalone === false){
      askToInstall();
    } else {
      getTodos();
      checkYear();
    }
  }

  $('button').fastClick();
  $('input').fastClick();

});

function askToInstall(){
  $('body').html('<p id="askToInstall">To install To→Do, please tap the \'share\' button below, and select \'Add to Home Screen\'.</p>');
}

// gets all items from database
function getTodos(){
  // ajax GET
  appendTodos();
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
  // for each from returned todo array
  $('main').append(
    '<div class="todo-item">' +
      '<input type="checkbox"></input>' +
      '<p>item 1</p>' +
      '<button class="delete-button">×</button>' +
    '</div>' +
    '<div class="todo-item">' +
      '<input type="checkbox"></input>' +
      '<p>item 2</p>' +
      '<button class="delete-button">×</button>' +
    '</div>' +
    '<div class="todo-item">' +
      '<input type="checkbox"></input>' +
      '<p>item 3</p>' +
      '<button class="delete-button">×</button>' +
    '</div>' +
    '<div class="todo-item">' +
      '<input type="checkbox"></input>' +
      '<p>item 4</p>' +
      '<button class="delete-button">×</button>' +
    '</div>' +
    '<div class="todo-item">' +
      '<input type="checkbox"></input>' +
      '<p class="completed">item 5</p>' +
      '<button class="delete-button">×</button>' +
    '</div>' +
    '<div class="todo-item">' +
      '<input type="checkbox"></input>' +
      '<p class="completed">item 6</p>' +
      '<button class="delete-button">×</button>' +
    '</div>'
  )
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
