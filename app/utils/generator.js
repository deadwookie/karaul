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
			options.charSet = 'abcdefghijklmnopqrstuvwxyz';
		}

		var randomString = '',
			randomPos;

		for (var i = 0; i < len; i++) {
			randomPos = Math.floor(Math.random() * options.charSet.length);
			randomString += options.charSet.substring(randomPos, randomPos + 1);
		}

		return options.capitaliseFirst ? randomString.charAt(0).toUpperCase() + randomString.slice(1) : randomString;
	},

	newDev: function(level) {
		var data = {},
			skillLevels = this.getDevSkillLevels(level, this.getDevSkillCount(level));

		console.log(skillLevels);

		data.name = this.getRandomString(5, {capitaliseFirst: true}) + ' ' + this.getRandomString(7, {capitaliseFirst: true});
		data.skills = this.getDevSkills(level, skillLevels);
		data.salary = this.getDevSalary(skillLevels);

		return data;

		// var dev = this.store.createRecord('dev', data);
		// return dev;
	},

	getDevSalary: function(skillLevels) {
		// =ROUND(AVERAGE(E3:E5)+max(E3:E5)/2)*1000
		var skillLevelsSum = skillLevels.reduce(function(pItem, cItem) {
				return pItem + cItem
			}),
			skillLevelsAvg = skillLevelsSum / skillLevels.length,
			skillLevelsAvgMax = Math.max.apply(Math, skillLevels);

		return Math.round(skillLevelsAvg + skillLevelsAvgMax / 2) * 1000;
	},

	getDevSkillCount: function() {
		var skillSettings = this.get('config.skill');
		return Math.round(Math.random() * (skillSettings.maxCount - skillSettings.minCount) + skillSettings.minCount);
	},

	getDevSkills: function(level, skillLevels) {
		// @TODO:
		return [];
	},

	getDevSkillLevels: function(level, count) {
		// =IF(AND(MAX(E3:E5)>=70;SUM(E3:E5)>=150);"Senior";IF(AND(MAX(E3:E5)>=50;SUM(E3:E5)>=90);"Middle";IF(AND(MAX(E3:E5)>=20;SUM(E3:E5)>=40);"Junior")))

		// just to be sure :)
		if (!count) {
			return [];
		}

		var skillSettings = this.get('config.skill'),
			skillLimits = skillSettings[level],
			result = [],
			oneSkillMoreThan,
			sumSkillMoreThan,
			sumSkillLessThan,
			i, s;

		while (true) {
			result = [];

			for (i = 0; i < count; i++) {
				s = skillSettings.increment * (Math.round((Math.floor(Math.random() * (skillSettings.max - skillSettings.minSum + 1)) + skillSettings.increment) / skillSettings.increment));
				result.push(s);
			}

			oneSkillMoreThan = result.every(function(item) {
				return item >= skillLimits.max;
			});
			sumSkillMoreThan = skillLimits.sum <= result.reduce(function(pItem, cItem) {
				return pItem + cItem;
			});
			sumSkillLessThan = skillLimits.maxSum > result.reduce(function(pItem, cItem) {
				return pItem + cItem;
			});

			if (oneSkillMoreThan && sumSkillMoreThan && sumSkillLessThan) {
				break;
			}
		}

		return result;
	},

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
