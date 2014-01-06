App.CreateFormView = Backbone.View.extend({
  events: {
    'submit': 'onSubmit'
  },
  onSubmit: function(e) {
    e.preventDefault();

    var kurekure = this.$('input[name="kurekure"]').val();

    this.collection.add({
      kurekure: kurekure
    }, { validate: true });
  }
});

App.ListView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function(){
		var $ul = this.$('ul');

		$ul.empty();
		
		var $li = $('<li>').appendTo($ul);
		$li.append('uuuuu');


		// 	var text = model.get('kurekure');
		// 	alert(text);

	}
});