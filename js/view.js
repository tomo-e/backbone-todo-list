//投稿フォームの値をParseに入力
var AppCreateFormView = Parse.View.extend({
  events: {
    'submit': 'onSubmit'
  },

  onSubmit: function(e) {
    e.preventDefault();

    var wishlist = new WishList();

    wishlist.on('error', function(model, error) {$('#_error').html(error);});
    wishlist.set({
      title: $('#title').val()
    })

    if(wishlist.isValid()) {
      $('#_error').html('');
      wishlist.save(null, {
        success: _.bind(function(wishlist) {
          this.collection.add(wishlist);
          $('#title').val('');
        }, this)
      });
    };
  }
});

//Parseの値を表示させる
var AppWishListView = Parse.View.extend({
  initialize: function() {
    this.render();
    this.collection.on("add remove", this.render, this);
    //this.listenTo(this.collection, 'add　remove', this.render);
  },
  render: function() {
   this.$el.html("");

    this.collection.each(function(model) {
      var item = new AppWishListItemView({model: model});
      this.$el.append(item.render().el);
    },this);
  }
});

//テンプレートに処理をいれる、modelを削除する
var AppWishListItemView = Parse.View.extend({
  tagName: "li",

  template: _.template('<%= title %>' + '<span class="remove">delete</span>'),
  // template:
  //   '<%= title %>' + '<span class="remove">delete</span>',

  events: {
    'click .remove': 'onRemove'
  },

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;         
    // var html = _.template(this.template, {
    //  title: this.model.toJSON()
    // });
  },

  onRemove: function() {
   this.model.destroy();
  }
});