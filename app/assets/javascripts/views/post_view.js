JournalApp.Views.PostView = Backbone.View.extend({

  intitialize: function() {

  },

  render: function() {
    // console.log(this.model)
    // console.log(this.id)
    // var $postContent = $("<h2>POST TITLE</h2><p>POST BODY</p>");
    // this.$el.append($postContent);
    // return this;


    var $edit = $("<a href='#posts/" + this.model.get("id") + "/update'>edit</a>")

    var $h2 = $("<h2></h2>");
    $h2.text(this.model.get("title"));

    var $p = $("<p></p>");
    $p.text(this.model.get("body"));

    var $backLink = $('<a href="#">back</a>')
    //var $postContent = $("<h2>POST TITLE</h2><p>POST BODY</p>");
    this.$el.append($h2, $edit, $p, $backLink);
    return this;
  }

});