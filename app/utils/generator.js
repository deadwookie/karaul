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

	getRandomString: function(len, options) {
		options = options || {};

		if (!options.charSet) {
			var charSet = 'abcdefghijklmnopqrstuvwxyz';
		}

		var randomString = '',
			randomPos;

		for (var i = 0; i < len; i++) {
			randomPos = Math.floor(Math.random() * charSet.length);
			randomString += charSet.substring(randomPos, randomPos + 1);
		}

		return options.capitaliseFirst ? randomString.charAt(0).toUpperCase() + string.slice(1) : randomString;
	},

	newDev: function(level) {
		var data = {};

		data.name = getRandomString(5, {capitaliseFirst: true}) + ' ' + getRandomString(7, {capitaliseFirst: true});
		data.skills = [];
		data.salary = 123123;

		var dev = this.store.createRecord('dev', data);

		return dev;
	},

	getTaskComplexities: function(level) {
		var cplx = this.get('config.taskComplexity'),
			maxSteps = cplx.max/cplx.step,
			minSteps = 1,
			a,b,c;


		while (true) {
			a = (Math.floor(Math.random() * (maxSteps - minSteps + 1)) + minSteps)*5;
			b = (Math.floor(Math.random() * (maxSteps - minSteps + 1)) + minSteps)*5;
			c = (Math.floor(Math.random() * (maxSteps - minSteps + 1)) + minSteps)*5;
			if (a+b+c<=cplx.maxSum) break;
		}

		return [a,b,c];
	},

	newTaskSkillSet: function() {
		var skillTags = this.get('config.skillTags');

		var cplxs = this.getTaskComplexities(),
			cnt = 0,
			arr =[],
			skill;

		Object.keys(skillTags).forEach(function(category){
			skill = this.store.createRecord('skill', {
				category: category,
				tag: this.getRandom(skillTags[category].tags),
				value: cplxs[cnt],
			});
			cnt++;
			arr.push(skill);
		}.bind(this));

		return Ember.RSVP.Promise.all(arr.map(function(item) {
			return item.save();
		}));
	},

	newTask: function(stage) {

		var stages = this.config.get('projectStages');
		if (!stages[stage]) throw 'Wrong stage';

		var cats = this.config.get('featureCategories');
		var features = this.config.get('features');

		var skills = this.newTaskSkillSet();
		var task = this.store.createRecord('task',{
			requiredProjectState: stages[stage],
			project: 'project1',
			category: this.getRandom(cats),
			name: this.getRandom(features),
		})

		return this.newTaskSkillSet().then(function(items){
			task.get('complexity').addObjects(items);
			return task.save();
		});

	}
});
