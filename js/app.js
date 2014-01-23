window.App = {};

$(function() {
	var todos = new App.Todos();
	todos.fetch();

	var createFormView  = new App.CreateFormView({
		el: '.kurekureForm',
		collection: todos
	});

	var listView = new App.ListView({
		el: '.todoList',
		collection: todos
	});

	var User = Backbone.Model.extend({
		defaults: {
			'name' : '',
			'age' : 0
		}
	});

	todos.on('invalid', function(model, message) {
		alert(message);
	});


	//ダミーデータ
	todos.add({
		kurekure: 'ああああああああ'
	}, { validate: true })

	//test
	var Users = Backbone.Collection.extend({
		model: User,
		url: 'data.json'
	});

	var UserView = Backbone.View.extend({
		el: $('#view'),
		initialize: function(){
			this.collection = new Users();
			this.collection.fetch({
				error: $.proxy(this.error, this),
				success: $.proxy(this.render, this)
			});
		},
		render: function(){
			_(this.collection.models).each(function(item){
					
			}, this);
		}
	});



});