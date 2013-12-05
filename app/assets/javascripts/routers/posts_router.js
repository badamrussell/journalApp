JournalApp.Routers.PostsRouter = Backbone.Router.extend({

  initialize: function($rootEl, postCollection) {
    this.$rootEl = $rootEl;
    this.collection = postCollection;
  },

  routes: {
    "": "index",
    "posts/:id": "show"
  },

  index: function() {
    console.log("INDEX")
    var newIndexView = new JournalApp.Views.PostsIndexView({collection: this.collection});

    this.$rootEl.html(newIndexView.render().$el);
  },

  show: function(id) {
    console.log("SHOW");
    var thisPost = {}
    _.each(this.collection.models, function(post) {
      if (post.get("id") == id) {
        thisPost = post;
      }
    })

    var newShowView = new JournalApp.Views.PostView({model: thisPost, id: id});

    this.$rootEl.html(newShowView.render().$el);
  }


});