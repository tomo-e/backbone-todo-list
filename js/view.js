// //テンプレートに処理をいれる、modelを削除する
// var TodoView = Parse.View.extend({
//       tagName: "li",
//       template: _.template('<%= title %>' + '<span class="remove">delete</span>'),

//       events: {
//       	'click .remove': 'onRemove'
//       },

//       initialize: function() {
//       	this.render();
//       },

//       render: function(){
//         this.$el.html(this.template(this.model.toJSON()));
//         return this;
//       },

//       onRemove: function() {
//       	this.model.destroy();
//       }
// });

// //Parseの値を表示させる
// var TodoListView = Parse.View.extend({
// 	initialize: function() {
// 		this.render();
// 		this.collection.on("add", this.render, this);
// 	},
// 	render: function() {
//         this.$el.html("");
//         this.collection.each(function(todo) {
//           var todoView = new TodoView({model:todo});
//           this.$el.append(todoView.render().el);
//         },this);
//         return this;
// 	}
// });

// //投稿フォームの値をParseに入力
// var appCreateFormView = Parse.View.extend({
// 	events: {
// 		'submit': 'onSubmit'
// 	},
// 	onSubmit: function(e) {
// 		e.preventDefault();
//         var todo = new Todo();
//         todo.on('error', function(model, error) {$('#error').html(error);});
//         todo.set({title : $('#title').val()})
//         if(todo.isValid()) {
//           $('#error').html('');
//           todo.save(null, {
//             success: _.bind(function(todo) {
//               this.collection.add(todo);
//               $('#title').val('');
//             }, this)
//           });
//         };
// 	}
// });