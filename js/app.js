Parse.initialize("xxxxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxxxx");

var AppView = Parse.View.extend({
  initialize: function(){
    new Parse.Query("WishList").find({
      success: _.bind(function(list){

        var wishLists = new WishLists(list);

        var createFormView = new AppCreateFormView({
          el: '#wishListForm',
          collection: wishLists
        });

        this.todoListView =  new AppWishListView({
          el: "#_wishList > ul",
          collection: wishLists
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