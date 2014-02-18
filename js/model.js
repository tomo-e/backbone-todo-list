var Todo = Parse.Object.extend({
  className:"Todo",
  validate: function(attrs){
    if(_.isEmpty(attrs.title)){
      return "おみやげ名は必須です";
    }
  }
});

var TodoList = Parse.Collection.extend({ model: Todo });