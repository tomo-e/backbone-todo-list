//Parse.initialize("XdVAwqKh70w9UMkOdZ6DtARG6RoeJCWvKN7fXCu1", "1h09oS4OraHlIBTPOSXyknitPkexsgWfvfMfWqno");






$(function() {
  var wishList = new AppWishList();

  wishList.set({
    'title': 'ほしいもの',
  });

  $('body').html(
    wishList.get('title')
  );
});






// var AppView = Parse.View.extend({
// 	initialize: function(){
// 		 new Parse.Query("Todo").find({
//           success: _.bind(function(list){

//             var todoList = new TodoList(list);

//             var createFormView = new appCreateFormView({
//             	el: '#kurekureForm',
//             	collection: todoList
//             });


//             this.todoListView =  new TodoListView({
//             	el: "#todo-list > ul",
//             	collection: todoList
//             });

//             this.render();
//           }, this)
// 		});
// 	},
// 	render: function(){
//         this.todoListView.render();
//         return this;
// 	}
// });

// var appView = new AppView();