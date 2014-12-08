import Ember from 'ember';

export default Ember.ObjectController.extend({
	idname: function() {
		return this.get('id') + this.get('name');
	}.property('name')
});
