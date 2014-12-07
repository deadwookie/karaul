import Ember from 'ember';

export default Ember.Object.extend({
	store: null,

	getRandom : function(obj) {
		var keys = Object.keys(obj),
			min = 0,
			max = keys.length;
		if (min===max) { return undefined; }
		var idx = Math.floor(Math.random()*keys.length);
		return obj[keys[idx]];
	},

	newDev: function() {},

	getSkillValues: function(level) {
		var skill = this.get('config.skill'),
			level = skill[level];

		var maxHandicap = 2,
			max = Math.floor(level.sum/4),
			min = 1;

		while (true) {
			var a = Math.floor(Math.random() * (max - min + 1)) + min
		}
	},

	newSkill: function() {
		var skillTags = this.get('config.skillTags');

		var skilltag = this.getRandom(skillTags),
			tag = this.getRandom(skilltag.tags),
			cat = skilltag.name;


		// var skill = this.store.createRecord('skill', {
		// 	category: cat,
		// 	tag: tag
		// });

		// return skill;
	},

	newTask: function() {

		this.newSkill();

		var stages = this.congif.get('projectStates');
		var cats = this.congif.get('featureCategories');
		var features = this.congif.get('features');

		var task = this.store.createRecord('task',{
			requiredProjectState: stages[stage],
			project: 'project1',
			category: getRandom(cats),
			name: getRandom(features),
		})

		// var task = this.store.createRecord('post', {
		// });
		// return task;
	}
});
