import Ember from 'ember';

import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:band/songs', 'BandSongsController', {
  needs: ['controller:band', 'model:song', 'model:band'],
  beforeEach: function() {
    this.container.register('store:main', DS.Store);
  }
});

test('matchingSongs', function(assert) {
  // expect(3);

  function createSong(attributes) {
    return store.createRecord('song', attributes);
  }

  var controller = this.subject();
  var store = this.container.lookup('store:main');

  Ember.run(function() {
    controller.set('model', [
      createSong({ id: 1, title: 'Elephants', rating: 5 }),
      createSong({ id: 2, title: 'New Fang', rating: 4 }),
      createSong({ id: 3, title: 'Mind Eraser, No Chaser', rating: 4 }),
      createSong({ id: 4, title: 'Spinning in Daffodils', rating: 5 }),
      createSong({ id: 5, title: 'No One Loves Me & Neither Do I', rating: 3 }),
    ]);
    controller.set('searchTerm', 'No');
  });

  assert.equal(controller.get('matchingSongs').length, 2, "The songs matching the search term are returned");

  Ember.run(function() {
    controller.set('searchTerm', 'No');
  });

  assert.equal(controller.get('matchingSongs').length, 2, "The song match is case-insensitive");

  Ember.run(function() {
    controller.set('searchTerm', 'Ser');
  });

  assert.equal(controller.get('matchingSongs').length, 1, "The match need not be a prefix match");
});
