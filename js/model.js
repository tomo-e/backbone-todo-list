var WishList = Parse.Object.extend({
  className:"WishList",
  validate: function(attrs){
    if(_.isEmpty(attrs.title)){
      return "おみやげ名は必須です";
    }
  }
});

var WishLists = Parse.Collection.extend({
  model: WishList
});