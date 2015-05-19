import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function() {
      var band = this.modelFor('band');
      Ember.$(document).attr('title', '%@ details - Rock & Roll'.fmt(band.get('name')));
    },
    willTransition: function (transition) {
      var controller = this.controller, leave;
      if (controller.get('isEditing')) {
        leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
        if (leave) {
            controller.set('isEditing', false);
          } else {
            transition.abort();
        }
      }
    }
  }
});
