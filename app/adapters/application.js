import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  // @TODO: import from config
  firebase: new window.Firebase('https://karaul.firebaseio.com')
});
