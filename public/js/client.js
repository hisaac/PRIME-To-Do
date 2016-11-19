var production = false;

$(document).ready(function(){
  if (production === false){
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

  $('#todoList').on('click', '.delete-button', function(){
    event.preventDefault();
    var titleOfTodo = $(this).parent().find('p').text();
    var areYouSure = confirm('"' + titleOfTodo + '" will now be deleted');

    if(areYouSure === true){
      deleteTodo(this);
    }
  });

  $('#todoList').on('click', 'input:checkbox', function(){
    toggleComplete(this);
  });

  $('.create-todo').on('click', function(){
    event.preventDefault();
    createTodo();
  })

  $('#todoList').on('click', '.title', function(){
    editTodo(this);
  });

});

function askToInstall(){
  $('body').html('<p id="askToInstall">To install To→Do, please tap the \'share\' button below, and select \'Add to Home Screen\'.</p>');
}

// gets all items from database
function getTodos(){
  $.ajax({
    type: 'GET',
    url: '/todo',
    success: function(data){
      appendTodos(data);
    },
    error: function(error){
      console.log('todo get request failed with error:', error);
    }
  });
}

// appends all items to DOM
function appendTodos(todos){
  $('#notCompleted').empty();
  $('#completedSection').empty();

  $(todos).each(function(index){
    // checks if item is completed or not
    if(todos[index].completed === true){
      $('#completedSection').append(
        '<div class="todo-item checked">' +
          '<input type="checkbox" checked></input>' +
          '<p class="title">' + todos[index].title + '</p>' +
          '<button class="delete-button">×</button>' +
        '</div>'
      );
      $('#completedSection').find('.todo-item').last().data('id', todos[index].id);
    } else {
      $('#notCompleted').append(
        '<div class="todo-item">' +
          '<input type="checkbox"></input>' +
          '<p class="title">' + todos[index].title + '</p>' +
          '<button class="delete-button">×</button>' +
        '</div>'
      );
      $('#notCompleted').find('.todo-item').last().data('id', todos[index].id);
    }
  });
}

// deletes item from DOM and database
function deleteTodo(buttonPressed){
  var idToDelete = $(buttonPressed).parent().data();

  $.ajax({
    type: 'DELETE',
    url: '/todo/' + idToDelete.id,
    success: getTodos,
    error: function(error){
      console.log('delete request failed with error:', error);
    }
  });
  $(buttonPressed).parent().remove();
}

// creates new todo
function createTodo(){
  $.ajax({
    type: 'POST',
    url: '/todo',
    success: getTodos,
    error: function(error){
      console.log('ajax post request failed with error:', error);
    }
  });
}

// toggles todo item's complete status
function toggleComplete(togglePressed){
  var idToEdit = $(togglePressed).parent().data();

  $.ajax({
    type: 'PUT',
    url: '/todo/toggle/' + idToEdit.id,
    success: getTodos,
    error: function(error){
      console.log('toggle request failed with error:', error);
    }
  });
}

// edit title of todo
function editTodo(selectedTitle){
  var $title = $(selectedTitle);
  var $input = $('<input/>').val($title.text());

  $title.replaceWith($input);

  $input.on('keypress blur', function(event){
    if (event.keyCode == 13){
      event.preventDefault();
    } else {
      return true;
    }
    var $p = $('<p class="title"/>').text($input.val());

    var idToEdit = $(this).parent().data();

    $.ajax({
      type: 'PUT',
      url: '/todo/' + $p.text() + '/' + idToEdit.id,
      success: getTodos,
      error: function(error){
        console.log('todo put request failed with error:', error);
      }
    });

    $input.replaceWith($p);

  }).focus();
}

// checks current year to hard coded start year in footer,
// and appends if necessary
function checkYear(){
  if ($('#thisYear').text() !== (new Date).getFullYear().toString()){
    $('#thisYear').append('–' + (new Date).getFullYear());
  }
}
