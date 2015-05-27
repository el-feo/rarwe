import Ember from 'ember';
import { capitalizeWords } from '../../helpers/capitalize-words';

export default Ember.Controller.extend({
  needs: ['band'],
  queryParams: {
    sortBy: 'sort',
    searchTerm: 's',
  },
  sortBy: 'ratingDesc',
  searchTerm: '',

  matchingSongs: function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('model').filter(function(song) {
      return song.get('title').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }.property('model.@each.title', 'searchTerm'),

  sortProperties: function() {
    var options = {
      "ratingDesc": "rating:desc,title:asc", "ratingAsc": "rating:asc,title:asc", "titleDesc": "title:desc", "titleAsc": "title:asc",
    };
    return options[this.get('sortBy')].split(',');
  }.property('sortBy'),

  sortedSongs: Ember.computed.sort('matchingSongs', 'sortProperties'),

  songCreationStarted: false,

  newSongPlaceholder: function() {
    var band = this.get('controllers.band.model');
    return "New %@ song".fmt(capitalizeWords(band.get('name')));
  }.property('controllers.band.model.name'),

  canCreateSong: function () {
    return this.get('songCreationStarted') || this.get('model.length');
  }.property('songCreationStarted', 'model.length'),

  actions: {
    setSorting: function(option) {
      this.set('sortBy', option);
    },
    enableSongCreation: function () {
      this.set('songCreationStarted', true);
    }
  },
});
