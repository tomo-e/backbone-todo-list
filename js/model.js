App.Todo = Backbone.Model.extend({
	defaults: {
		kurekure: null,
	},
	validate: function(attrs) {
		if(!attrs.kurekure) {
			return 'おみやげ名は必須です';
		}
	}
});

App.Todos = Backbone.Collection.extend({
	model: App.Todo
});