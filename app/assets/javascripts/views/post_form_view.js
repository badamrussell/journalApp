JournalApp.Views.PostFormView = Backbone.View.extend({

  initialize: function() {
    that = this;
    this.$el.on("submit", "#post_form", this.submitForm.bind(this) );
  },

  render: function() {
    console.log(">>",this.model)
    console.log(this.model.get("id"));
    console.log(this.model.get("title"));
    this.$el.append(JST["post_form"]({model: this.model}))

    return this;
  },

  submitForm: function(event) {
    event.preventDefault();
    console.log(event);
    var formData = $(event.currentTarget).serializeJSON();
    console.log("formData", formData);

    if (this.model.isNew()) {
      this.model.set(formData);
      this.collection.create(this.model, { success: this.successHandler, error: this.errorHandler })
    } else  {
      console.log(this.model)
      console.log(this.model.get("id"))
      this.model.set(formData);
      this.model.save(formData, { success: this.successHandler, error: this.errorHandler });
    }

  },

  successHandler: function(model, response, options) {
    console.log("-------GOOOOD");
    JournalApp.Router.navigate("#", {trigger: true});
    //Backbone.history.navigate("#", {trigger: true});
  },

  errorHandler: function(model, xhr, options) {

    alert("ERROR",options);
    that.model = model;
  }

});