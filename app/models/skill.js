import DS from 'ember-data';

export default DS.Model.extend({
	value: DS.attr('number'),
	category: DS.attr('string'),
	tag: DS.attr('string'),

	progressBarStyle: function() {
		return 'width: ' + this.get('value') + '%';
	}.property("value"),

	progressBarValueNow: function() {
		return this.get('value');
	}.property("value"),

	progressBarCls: function() {
		var headerCls = 'danger';

		switch(this.get('category')) {
			case 'architect':
				headerCls = 'danger';
			break;
			case 'backEnd':
				headerCls = 'success';
			break;
			case 'fontEnd':
				headerCls = 'info';
			break;
		}

		return 'progress-bar-' + headerCls;
	}.property('category')
});
