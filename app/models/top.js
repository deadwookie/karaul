import DS from 'ember-data';

export default DS.Model.extend({
  score: DS.attr('int'),
  user: DS.attr('string')
});
