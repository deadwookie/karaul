/* jshint node: true */
module.exports = function(environment) {
	var config = {
		game: {
			sprintCount: 40,
			yearCount: 4
		},

		skill: {
			min: 0,
			max: 100,
			increment: 5,
			maxGrow: 90,

			junior: {
				max: 20,
				sum: 40
			},

			middle: {
				max: 50,
				sum: 90
			},

			senior: {
				max: 70,
				sum: 150
			}
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

		projectStates: {
			prototype: 'Prototype',
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

	};

	if (environment === 'development') {
	}

	if (environment === 'production') {
	}

	return config;
};
