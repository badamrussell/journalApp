window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($el, posts) {
    var postCollection = new JournalApp.Collections.Posts(posts);

    var JournalRouter = JournalApp.Router = new JournalApp.Routers.PostsRouter($el, postCollection);
    console.log(JournalRouter)
    Backbone.history.start(); //starts route monitoring


    //CSS is not working...

    //is it better to pass in the inti
    var indexView = new JournalApp.Views.PostsIndexView({collection: postCollection});
    var showView = new JournalApp.Views.PostView({model: postCollection.models[0]});
    $el.find("#sidebar").html(indexView.render().$el);
    $el.find("#content").append(showView.render().$el);
  }
};

// $(document).ready(function(){
//   JournalApp.initialize(this);
// });
