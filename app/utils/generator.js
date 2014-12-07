import Ember from 'ember';

var getRandom = function(obj) {
	var keys = Object.keys(obj),
		min = 0,
		max = keys.length;
	if (min===max) { return undefined; }
	var idx = Math.floor(Math.random()*keys.length);
	return this[keys[idx]];
};

export default Ember.Object.extend({
	store: null,
	config: null,

	newDev: function() {},

	newSkill: function() {
//		var skillTags = this.congif.get('skillTags');

		// var skill = this.store.createRecord('skill', {
		// 	category: getRandom(skillTags).name
		// });

//		return skill;
	},

	newTask: function() {

		var skillTags = this.congif.get('skillTags');
		this.newSkill();
		debugger;

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
