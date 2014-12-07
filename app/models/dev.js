import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	salary: DS.attr('number'),
	skills: DS.hasMany('skill', { async: true }),
	marketSalary: function() {
		var values = this.get('skills').getEach('value');

		if (!values.length) {
			return 0;
		}

		var skillLevelsSum = values.reduce(function(pItem, cItem) {
				return pItem + cItem;
			}, 0),
			skillLevelsAvg = skillLevelsSum / values.length,
			skillLevelsAvgMax = Math.max.apply(Math, values);

		return Math.round(skillLevelsAvg + skillLevelsAvgMax / 2) * 1000 || 0;
	}.property('skills.@each.value'),
	level: function() {
		var values = this.get('skills').getEach('value'),
			level,
			anyMoreThan,
			sumMoreThan;

		Object.keys(this.get('config.skillLevels')).forEach(function(lvl) {
			anyMoreThan = values.any(function(v) {
				return v >= lvl.max;
			});
			sumMoreThan = lvl.sum <= values.reduce(function(pItem, cItem) {
				return pItem + cItem;
			}, 0);

			if (anyMoreThan && sumMoreThan) {
				level = lvl;
			}
		}.bind(this));

		return level;
	}.property('skills.@each.value')
});
