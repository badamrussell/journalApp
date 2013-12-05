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


    //is it better to pass in the inti
    var indexView = new JournalApp.Views.PostsIndexView({collection: postCollection});
    var showView = new JournalApp.Views.PostView();
    $el.append(indexView.render().$el);
    //$el.append(showView.render().$el);
  }
};

// $(document).ready(function(){
//   JournalApp.initialize(this);
// });
