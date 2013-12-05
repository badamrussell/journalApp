JournalApp.Views.PostView = Backbone.View.extend({

  intitialize: function() {

  },

  render: function() {
    // console.log(this.model)
    // console.log(this.id)
    // var $postContent = $("<h2>POST TITLE</h2><p>POST BODY</p>");
    // this.$el.append($postContent);
    // return this;

    var $h2 = $("<h2></h2>");
    console.log(this);
    console.log(this.model);
    $h2.text(this.model.get("title"));
    var $p = $("<p></p>");
    $p.text(this.model.get("body"));
    $backLink = $('<a href="#">back</a>')
    //var $postContent = $("<h2>POST TITLE</h2><p>POST BODY</p>");
    this.$el.append($h2, $p, $backLink);
    return this;



  }

});