var WishItem = Parse.Object.extend({
  className:"WishItem",
  validate: function(attrs){
    if(_.isEmpty(attrs.title)){
      return "おみやげ名は必須です";
    }
  }
});

var WishList = Parse.Collection.extend({
  model: WishItem
});