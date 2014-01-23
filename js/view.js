


App.CreateFormView = Backbone.View.extend({
  events: {
    'submit': 'onSubmit'
  },
  onSubmit: function(e) {
    e.preventDefault();

    var kurekure = this.$('input[name="kurekure"]').val();

    this.collection.create({
      kurekure: kurekure
    }, { validate: true });
  }
});

App.ListView = Backbone.View.extend({
	initialize: function() {
		this.render();
		this.listenTo(this.collection, 'add remove', this.render);
	},
	render: function(){
		// var $ul = this.$('ul');
		// $ul.empty();

		var $list = this.$('ul').empty();

		this.collection.each(function(model) {
			var item = new App.ListTodoView ({ model: model });
			$list.append(item.el);
			// var text = model.get('kurekure');
			// $ul.append('<li>' + text);
		}, this);
	}
});

App.ListTodoView = Backbone.View.extend({
	tagName: 'li',

	template: '<%= kurekure %>' + '<span class="remove">削除</span>',

	events: {
		'click .remove': 'onRemove'
	},

	initialize: function() {
		this.render();
	},
	render: function() {
		var html = _.template(this.template, {
			kurekure: this.model.get('kurekure')
		});

		this.$el.html(html);
	},

	onRemove: function() {
		this.model.destroy();
	}
});




