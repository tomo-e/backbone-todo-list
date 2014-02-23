Parse.initialize("xxxxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxxxx");

var AppView = Parse.View.extend({
  initialize: function(){
    new Parse.Query("WishItem").find({
      success: _.bind(function(list){

        var wishList = new WishList(list);

        var createFormView = new AppCreateFormView({
          el: '#wishListForm',
          collection: wishList
        });

        this.todoListView =  new AppWishListView({
          el: "#_wishList > ul",
          collection: wishList
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