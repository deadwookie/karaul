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

	getTaskComplexities: function(level) {
		var cplx = this.get('config.taskComplexity'),
			maxSteps = cplx.max/cplx.step,
			minSteps = 1,
			a,b,c;


		while (true) {
			a = Math.floor(Math.random() * (maxSteps - minSteps + 1)) + minSteps;
			b = Math.floor(Math.random() * (maxSteps - minSteps + 1)) + minSteps;
			c = Math.floor(Math.random() * (maxSteps - minSteps + 1)) + minSteps;
			if (a+b+c<cplx.maxSum) break;
		}

		return [a,b,c];
	},

	newTaskSkillSet: function() {
		var skillTags = this.get('config.skillTags');

		var skilltag = this.getRandom(skillTags),
			tag = this.getRandom(skilltag.tags),
			cat = skilltag.name,
			cplxs = this.getTaskComplexities();

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
