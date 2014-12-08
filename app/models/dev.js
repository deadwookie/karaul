import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	salary: DS.attr('number'),
	skills: DS.hasMany('skill', { async: true }),
	project: DS.belongsTo('project'),
	game: DS.belongsTo('game'),

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
			skillLevels = this.get('config.skillLevels'),
			level,
			anyMoreThan,
			sumMoreThan;

		Object.keys(skillLevels).forEach(function(lvl) {
			anyMoreThan = values.any(function(v) {
				return v >= skillLevels[lvl].max;
			});
			sumMoreThan = skillLevels[lvl].sum <= values.reduce(function(pItem, cItem) {
				return pItem + cItem;
			}, 0);

			if (anyMoreThan && sumMoreThan) {
				level = lvl;
			}
		}.bind(this));

		return level;
	}.property('skills.@each.value'),

	cardHeaderCls: function() {
		var headerCls = 'default';

		switch(this.get('level')) {
			case 'junior':
				headerCls = 'warning';
			break;
			case 'middle':
				headerCls = 'info';
			break;
			case 'senior':
				headerCls = 'success';
			break;
			case 'student':
				headerCls = 'default';
			break;
		}

		return 'panel-' + headerCls;
	}.property('skills.@each.value', 'level')
});
