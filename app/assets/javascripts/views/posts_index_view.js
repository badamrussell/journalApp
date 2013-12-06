JournalApp.Views.PostsIndexView = Backbone.View.extend({

  initialize: function() {
    this.listenTo( this.collection, "remove", this.render.bind(this) );
    // this.listenTo( this.collection, "add", this.render.bind(this) );
    // this.listenTo( this.collection, "change:title", this.render.bind(this) );
    // this.listenTo( this.collection, "reset", this.render.bind(this) );
  },

  events: {
    "click button": "myDelete"
  },

  render: function() {
    this.$el.empty();
    var $backLink = $('<a href="#posts/new">new</a>')
    this.$el.append($backLink);

    var $ul = $("<ul></ul>");

    _.each(this.collection.models, function(post) {
      $ul.append("<li><a href='#posts/" + post.get("id") + "'>" + post.get("title") +"</a></li>");
      $ul.append("<button data-id='" + post.get("id") + "'>Delete</button>");
    })

    this.$el.append($ul);

    return this;
  },

  myDelete: function(event) {
    event.preventDefault();
    var postID = $(event.currentTarget).attr('data-id');

    var postModel = this.collection.get(postID);
    postModel.destroy();
    this.collection.remove(postModel);
  },

})
