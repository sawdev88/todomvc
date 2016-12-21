var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

console.log('TODOS');

// View
displayTodosButton.addEventListener('click', function () {
  todos.displayTodos();
});

toggleAllButton.addEventListener('click', function () {
  todos.toggleAll();
})


// Logic
const todos = {
  list: [{item: 'item 1', complete: false}, {item: 'item 2', complete: true}, {item: 'item 3', complete: false}],

  addTodo: function(item, complete = false) {
    this.list.push({
      item: item,
      complete: complete
    });
    this.displayTodos();
    },

  displayTodos: function() {
    if(this.list.length > 0) {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].complete == true) {
          console.log('(x) ' + this.list[i].item);
        } else {
          console.log('( ) ' + this.list[i].item);
        }
      }
    } else {
      console.log('Nothing todo');
    }

  },

  changeTodo: function(index, newItem) {
    this.list[index].item = newItem;
    this.displayTodos();
  },

  deleteTodos: function(index) {
    this.list.splice(index,1);
    this.displayTodos();
  },

  toggleComplete: function(index) {
    var x = this.list[index];
    x.complete = !x.complete;
    this.displayTodos();
  },

  toggleAll: function() {
    var totaltodos = this.list.length;
    var completedTodos = 0;

    for (var i = 0; i < totaltodos; i++) {
      if (this.list[i].complete === true) {
        completedTodos++;
      }
    }

    for (var i = 0; i < totaltodos; i++) {
      if (totaltodos === completedTodos) {
        this.list[i].complete = false;
      } else {
        this.list[i].complete = true;
      }
    }

    console.log('Total ' + completedTodos);
    this.displayTodos();
  }
}
