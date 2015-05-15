import Ember from 'ember';

export default Ember.Controller.extend({
  songCreationStarted: false,

  canCreateSong: function () {
    return this.get('songCreationStarted') || this.get('model.length');
  }.property('songCreationStarted', 'model.length'),
  
  actions: {
    enableSongCreation: function () {
      this.set('songCreationStarted', true);
    }
  },
});
