/* jshint node: true */
module.exports = function(environment) {
	var config = {
		game: {
			sprintCount: 40,
			yearCount: 4
		},

		skill: {
			min: 0,
			minSum: 40,
			max: 100,
			increment: 5,
			maxGrow: 90,

			junior: {
				max: 20,
				sum: 90
			},

			middle: {
				max: 50,
				sum: 150
			},

			senior: {
				max: 70,
				sum: 240
			},

			guru: {
				max: 70,
				sum: 300
			}
		},

		taskComplexity: {
			max: 30,
			maxSum: 50,
			step: 5
		},

		estimate: {
			coeff: 1,
			modifier: 2
		},

		salary: {
			skillCoeff: 2,
			fixedSprints: 10,
			skillSumReview: 100,
			firePenaltySprints: 1
		},

		developer: {
			maxPerTeam: 5,
			sprintHours: 40,
			newbiePenaltyHours: 20
		},

		projectStages: {
			alpha: 'Prototype',
			beta: 'Beta',
			release: 'Release',
			v2: '2.0',
		},

		skillTags: {
			fontEnd: {
				name: 'Front-End',
				tags: [
					'jQuery',
					'Ember.js',
					'HTML+CSS',
					'backbone.js',
					'Ext.js'
				]
			},
			backEnd: {
				name: 'Back-End',
				tags: [
					'php',
					'Java',
					'Ruby',
					'node.js',
					'Scala',
				]
			},
			architect: {
				name: 'Architect',
				tags: [
					'UML',
					'Flow Charts',
					'ERD',
					'Petri net',
					'Markov chains'
				]
			}
		},

		featureCategories:{
			core: 'Core Feature',
			social: 'Social Feature',
			wow: 'Wow-Feature'
		},

		features: [
			'Facebook structure',
			'News Feed',
			'Friend',
			'Wall',
			'Timeline',
			'Like',
			'Messages and inbox',
			'Notifications',
			'Networks and groups',
			'Applications',
			'Events',
			'Marketplace',
			'Notes',
			'Places',
			'Platform',
			'Questions',
			'Photos',
			'Videos',
			'Facebook Paper',
			'General features',
			'Credits',
			'Feature phones',
			'Graph Search',
			'IPv6',
			'Listen with Friends',
			'Facebook Live',
			'Mood faces',
			'Phone',
			'Poke',
			'Smartphone integration',
			'Subscribe',
			'Ticker',
			'URL shortener',
			'Verified Accounts',
			'Hash tagging Feature',
			'Introducing Say Thanks',
			'Languages',
			'Security',
		],

		events: [
			{
				desc: 'Чтобы удовлетворить прихоти своей девушки, ваш джуниор вынужден был найти вторую работу. Он получает + к 3м своим маскимальным тегам, но в текущем спринте работает на четверть меньше.',
				config: {onceAffect:{tags:{targetDev:'min()',targetTags:'3 max()',valueChange:1}},sprintAffect:{humanHours:{targetDev:'min()',valueChange:'*0.75'}}}

			},
			{
				desc: 'Ваши девы согласись проработать все выходные за то, что вы установите в офис мини-пивоварню. Заплатите $500. Время спринта увеличивается на четверть.',
				config: {onceAffect:{money:-500},sprintAffect:{humanHours:{targetDev:'all',valueChange:'*1.25'}}}

			},
			{
				desc: 'Ваш фронтенд девелопер увлекся Босхом и начал делать компоненты под стать. Это добавило вам 200к ценителей искусства. Его фронтенд скиллы увеличились, но рабочие часы в данном спринте уменьшаются на четверть.',
				config: {onceAffect:{traffic:200},tags:{targetDev:'max(F)',targetTags:'all(F)',valueChange:1},sprintAffect:{humanHours:{targetDev:'max(F)',valueChange:'*0.75'}}}

			}
		]

	};

	if (environment === 'development') {
	}

	if (environment === 'production') {
	}

	return config;
};
