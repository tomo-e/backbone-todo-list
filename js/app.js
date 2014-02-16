Parse.initialize("XXXXXXXXXXXXXXXXXXXX", "XXXXXXXXXXXXXXXXXXXX");

var AppView = Parse.View.extend({
	initialize: function(){
		 new Parse.Query("Todo").find({
          success: _.bind(function(list){

            var todoList = new TodoList(list);

            var createFormView = new appCreateFormView({
            	el: '#kurekureForm',
            	collection: todoList
            });


            this.todoListView =  new TodoListView({
            	el: "#todo-list > ul",
            	collection: todoList
            });

            this.render();
          }, this)
		});
	},
	render: function(){
        this.todoListView.render();
        return this;
	}
});

var appView = new AppView();