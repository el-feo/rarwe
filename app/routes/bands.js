import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('band');
  },

  actions: {
    createBand: function () {
      var route = this,
          controller = this.get('controller');
      var band = this.store.createRecord('band', controller.getProperties('name'));
      band.save().then(function () {
        controller.set('name', '');
        route.transitionTo('band.songs', band);
      })
    },
    didTransition: function () {
      var band = this.modelFor('band');
      Ember.$(document).attr('title', 'Bands - Rock & Roll');
    },
  }
});
