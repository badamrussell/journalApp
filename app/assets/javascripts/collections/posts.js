JournalApp.Collections.Posts = Backbone.Collection.extend({
   model: JournalApp.Models.Post,
   url: "posts/"
 });

 //var postColl = new JournalApp.Collections.Posts({model:{title: "b"}});