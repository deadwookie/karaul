/* jshint node: true */
module.exports = function(environment) {
	var GAME = {

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
		}

	};

	if (environment === 'development') {
	}

	if (environment === 'production') {
	}

	return GAME;
};
