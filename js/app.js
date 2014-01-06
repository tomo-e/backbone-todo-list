window.App = {};

$(function() {
	var todos = new App.Todos();

	var createFormView  = new App.CreateFormView({
		el: '.kurekureForm',
		collection: todos
	});

	var listView = new App.ListView({
		el: '.todoList',
		collection: todos
	});


	// todos.on('add', function(model) {
	// 	$('.count').html(todos.length + '個欲しいのがあるよ！');

	// 	var $li = $('<li>').html(
	// 		model.get('kurekure')
	// 	);

	// 	$('.list').append($li);
	// });

	todos.on('invalid', function(model, message) {
		alert(message);
	});
});