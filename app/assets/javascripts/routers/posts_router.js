JournalApp.Routers.PostsRouter = Backbone.Router.extend({

  initialize: function($rootEl, postCollection) {
    this.$rootEl = $rootEl;
    this.$sidebar = $rootEl.find("#sidebar")
    this.$content = $rootEl.find("#content")
    this.collection = postCollection;
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id/update": "update",
    "posts/:id": "show"
  },

  index: function() {
    console.log("INDEX")
    var newIndexView = new JournalApp.Views.PostsIndexView({collection: this.collection});

    this.$sidebar.html(newIndexView.render().$el);
  },

  show: function(id) {
    var thisPost = {}
    _.each(this.collection.models, function(post) {
      if (post.get("id") == id) {
        thisPost = post;
      }
    })

    var newShowView = new JournalApp.Views.PostView({model: thisPost, id: id});

    this.$content.html(newShowView.render().$el);
  },

  new: function() {
    var newModel = new JournalApp.Models.Post();
    var newPostView = new JournalApp.Views.PostFormView({model: newModel, collection: this.collection});

    this.$content.html(newPostView.render().$el);
  },

  update: function(id) {
    console.log("IN UPDATE!!!")
    var thisPost = {}
    _.each(this.collection.models, function(post) {
      if (post.get("id") == id) {
        thisPost = post;
      }
    })

    var newPostView = new JournalApp.Views.PostFormView({model: thisPost, collection: this.collection});

    this.$content.html(newPostView.render().$el);
  }


});