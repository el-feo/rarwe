import Ember from 'ember';

function submit(app, selector, context) {
  triggerEvent(selector, 'submit');
}

function selectBand(app, name) {
  visit('/')
  .click('.band-link:contains("' + name + '")');
  return app.testHelpers.wait();
}

Ember.Test.registerAsyncHelper('submit', submit);
Ember.Test.registerAsyncHelper('selectBand', selectBand);
