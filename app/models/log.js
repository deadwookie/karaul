import DS from 'ember-data';

export default DS.Model.extend({
	time: DS.attr('string'),
	msg: DS.attr('string')
});

App.ApplicationRoute = Ember.Route.extend({
	model: function() {
		this.store.push('album', {
			id: 1,
			time: "Game started eventually"
		});

		this.store.push('album', {
			id: 2,
			time: "Game ended"
		});
	}
});