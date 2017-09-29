describe('TransformerGameSpecs', function () {

    it('should both teams loose if Optimus Prime vs Depraking', function () {
        var list = [
            {
                'name': 'Predaking',
                'type': 'D',
                'strength': 8,
                'intelligence': 9,
                'speed': 2,
                'endurance': 6,
                'rank': 7,
                'courage': 5,
                'firepower': 6,
                'skill': 10
            },
            {
                'name': 'Optimus Prime',
                'type': 'A',
                'strength': 6,
                'intelligence': 6,
                'speed': 7,
                'endurance': 9,
                'rank': 5,
                'courage': 2,
                'firepower': 9,
                'skill': 7
            }
        ];
        var expectedOutcome = {
            'battles': 1,
            'winningTeam': 'Neither',
            'losingTeam': 'Both',
            'survivingAutobots': [],
            'survivingDecepticons': []

        };
        var actualOutcome = TransformerGame(list);
        expect(actualOutcome).toEqual(expectedOutcome);
    });

    it('should give expected results for example', function () {
        var list = [
            {
                'name': 'Soundwave',
                'type': 'D',
                'strength': 8,
                'intelligence': 9,
                'speed': 2,
                'endurance': 6,
                'rank': 7,
                'courage': 5,
                'firepower': 6,
                'skill': 10
            },
            {
                'name': 'Bluestreak',
                'type': 'A',
                'strength': 6,
                'intelligence': 6,
                'speed': 7,
                'endurance': 9,
                'rank': 5,
                'courage': 2,
                'firepower': 9,
                'skill': 7
            },
            {
                'name': 'Hubcap',
                'type': 'A',
                'strength': 4,
                'intelligence': 4,
                'speed': 4,
                'endurance': 4,
                'rank': 4,
                'courage': 4,
                'firepower': 4,
                'skill': 4
            }
        ];
        var expectedOutcome = {
            'battles': 1,
            'winningTeam': 'Decepticons',
            'losingTeam': 'Autobots',
            'survivingAutobots': [
                {
                    'name': 'Hubcap',
                    'type': 'A',
                    'strength': 4,
                    'intelligence': 4,
                    'speed': 4,
                    'endurance': 4,
                    'rank': 4,
                    'courage': 4,
                    'firepower': 4,
                    'skill': 4
                }
            ],
            'survivingDecepticons': [
                {
                    'name': 'Soundwave',
                    'type': 'D',
                    'strength': 8,
                    'intelligence': 9,
                    'speed': 2,
                    'endurance': 6,
                    'rank': 7,
                    'courage': 5,
                    'firepower': 6,
                    'skill': 10
                }
            ]

        };
        var actualOutcome = TransformerGame(list);
        expect(actualOutcome).toEqual(expectedOutcome);
    });

    it('should have autobots win with optimus prime', function () {
        var list = [
            {
                'name': 'Soundwave',
                'type': 'D',
                'strength': 8,
                'intelligence': 9,
                'speed': 2,
                'endurance': 6,
                'rank': 7,
                'courage': 5,
                'firepower': 6,
                'skill': 10
            },
            {
                'name': 'Optimus Prime',
                'type': 'A',
                'strength': 6,
                'intelligence': 6,
                'speed': 7,
                'endurance': 9,
                'rank': 5,
                'courage': 2,
                'firepower': 9,
                'skill': 7
            }
        ];
        var expectedOutcome = {
            'battles': 1,
            'winningTeam': 'Autobots',
            'losingTeam': 'Decepticons',
            'survivingAutobots': [
                {
                    'name': 'Optimus Prime',
                    'type': 'A',
                    'strength': 6,
                    'intelligence': 6,
                    'speed': 7,
                    'endurance': 9,
                    'rank': 5,
                    'courage': 2,
                    'firepower': 9,
                    'skill': 7
                }
            ],
            'survivingDecepticons': []

        };
        var actualOutcome = TransformerGame(list);
        expect(actualOutcome).toEqual(expectedOutcome);
    });

    it('should have decepticons win with predaking', function () {
        var list = [
            {
                'name': 'Predaking',
                'type': 'D',
                'strength': 8,
                'intelligence': 9,
                'speed': 2,
                'endurance': 6,
                'rank': 7,
                'courage': 5,
                'firepower': 6,
                'skill': 10
            },
            {
                'name': 'Hubcap',
                'type': 'A',
                'strength': 4,
                'intelligence': 4,
                'speed': 4,
                'endurance': 4,
                'rank': 4,
                'courage': 4,
                'firepower': 4,
                'skill': 4
            }
        ];
        var expectedOutcome = {
            'battles': 1,
            'winningTeam': 'Decepticons',
            'losingTeam': 'Autobots',
            'survivingAutobots': [],
            'survivingDecepticons': [
                {
                    'name': 'Predaking',
                    'type': 'D',
                    'strength': 8,
                    'intelligence': 9,
                    'speed': 2,
                    'endurance': 6,
                    'rank': 7,
                    'courage': 5,
                    'firepower': 6,
                    'skill': 10
                }
            ]

        };
        var actualOutcome = TransformerGame(list);
        expect(actualOutcome).toEqual(expectedOutcome);
    });

    it('should have the ultimate showdown where unfortunately the decepticons are victorious', function () {
        var list = [
            {
                'name': 'Soundwave',
                'type': 'D',
                'strength': 8,
                'intelligence': 9,
                'speed': 2,
                'endurance': 6,
                'rank': 7,
                'courage': 5,
                'firepower': 6,
                'skill': 10
            },
            {
                'name': 'Bluestreak',
                'type': 'A',
                'strength': 6,
                'intelligence': 6,
                'speed': 7,
                'endurance': 9,
                'rank': 5,
                'courage': 2,
                'firepower': 9,
                'skill': 7
            },
            {
                'name': 'Hubcap',
                'type': 'A',
                'strength': 4,
                'intelligence': 4,
                'speed': 4,
                'endurance': 4,
                'rank': 4,
                'courage': 4,
                'firepower': 4,
                'skill': 4
            },
            {
                'name': 'Skywarp',
                'type': 'D',
                'strength': 8,
                'intelligence': 9,
                'speed': 2,
                'endurance': 6,
                'rank': 10,
                'courage': 5,
                'firepower': 6,
                'skill': 10
            },
            {
                'name': 'Predaking',
                'type': 'D',
                'strength': 8,
                'intelligence': 9,
                'speed': 2,
                'endurance': 6,
                'rank': 7,
                'courage': 5,
                'firepower': 6,
                'skill': 10
            },
            {
                'name': 'Optimus Prime',
                'type': 'A',
                'strength': 6,
                'intelligence': 6,
                'speed': 7,
                'endurance': 9,
                'rank': 5,
                'courage': 2,
                'firepower': 9,
                'skill': 7
            }
        ];
        var expectedOutcome = {
            'battles': 3,
            'winningTeam': 'Decepticons',
            'losingTeam': 'Autobots',
            'survivingAutobots': [
                {
                    'name': 'Optimus Prime',
                    'type': 'A',
                    'strength': 6,
                    'intelligence': 6,
                    'speed': 7,
                    'endurance': 9,
                    'rank': 5,
                    'courage': 2,
                    'firepower': 9,
                    'skill': 7
                }
            ],
            'survivingDecepticons': [
                {
                    'name': 'Predaking',
                    'type': 'D',
                    'strength': 8,
                    'intelligence': 9,
                    'speed': 2,
                    'endurance': 6,
                    'rank': 7,
                    'courage': 5,
                    'firepower': 6,
                    'skill': 10
                },
                {
                    'name': 'Soundwave',
                    'type': 'D',
                    'strength': 8,
                    'intelligence': 9,
                    'speed': 2,
                    'endurance': 6,
                    'rank': 7,
                    'courage': 5,
                    'firepower': 6,
                    'skill': 10
                }
            ]

        };
        var actualOutcome = TransformerGame(list);
        expect(actualOutcome).toEqual(expectedOutcome);
    });
});

describe('checkCourageAndStrength', function () {

    it('should return autobot win', function () {
        var autobot = {
            'courage': 5,
            'strength': 4
        };
        var decepticon = {
            'courage': 1,
            'strength': 1
        };
        expect(checkCourageAndStrength(autobot, decepticon)).toEqual(1);
    });

    it('should return decepticon win', function () {
        var autobot = {
            'courage': 2,
            'strength': 2
        };
        var decepticon = {
            'courage': 7,
            'strength': 6
        };
        expect(checkCourageAndStrength(autobot, decepticon)).toEqual(0);
    });

    it('should return neither', function () {
        var autobot = {
            'courage': 1,
            'strength': 1
        };
        var decepticon = {
            'courage': 1,
            'strength': 1
        };
        expect(checkCourageAndStrength(autobot, decepticon)).toEqual(-1);
    })
});

describe('checkSkillSpecs', function () {

    var autobot = {
        'skill': 1
    };
    var decepticon = {
        'skill': 1
    };

    it('should return autobot win', function () {
       autobot.skill = 4;
       decepticon.skill = 1;
       expect(checkSkill(autobot, decepticon)).toEqual(1);
    });

    it('should return decepticon win', function () {
        autobot.skill = 2;
        decepticon.skill = 5;
        expect(checkSkill(autobot, decepticon)).toEqual(0);
    });

    it('should return neither', function () {
        autobot.skill = 2;
        decepticon.skill = 3;
        expect(checkSkill(autobot, decepticon)).toEqual(-1);
    })
});

describe('checkOverallRating', function () {



    it('should return autobot win', function () {
        var autobot = {
            'strength': 2,
            'intelligence': 1,
            'speed': 1,
            'endurance': 1,
            'firepower': 1
        };
        var decepticon = {
            'strength': 1,
            'intelligence': 1,
            'speed': 1,
            'endurance': 1,
            'firepower': 1
        };
        expect(checkOverallRating(autobot, decepticon)).toEqual(1);
    });

    it('should return decepticon win', function () {
        var autobot = {
            'strength': 1,
            'intelligence': 1,
            'speed': 1,
            'endurance': 1,
            'firepower': 1
        };
        var decepticon = {
            'strength': 1,
            'intelligence': 1,
            'speed': 1,
            'endurance': 2,
            'firepower': 1
        };
        expect(checkOverallRating(autobot, decepticon)).toEqual(0);
    });

    it('should return neither', function () {
        var autobot = {
            'strength': 1,
            'intelligence': 1,
            'speed': 1,
            'endurance': 1,
            'firepower': 1
        };
        var decepticon = {
            'strength': 1,
            'intelligence': 1,
            'speed': 1,
            'endurance': 1,
            'firepower': 1
        };
        expect(checkOverallRating(autobot, decepticon)).toEqual(-1);
    });
});

describe('fight', function () {

    it('should return 9999999 if optimus prime vs predaking', function () {
        var autobot = {'name': 'Optimus Prime'};
        var decepticon = {'name': 'Predaking'};

        expect(fight(autobot, decepticon)).toEqual(9999999);
    });

    it('should return 1 if optimus prime vs random', function () {
        var autobot = {'name': 'Optimus Prime'};
        var decepticon = {'name': 'Soundwave'};

        expect(fight(autobot, decepticon)).toEqual(1);
    });

    it('should return 0 if random vs predaking', function () {
        var autobot = {'name': 'Bluestreak'};
        var decepticon = {'name': 'Predaking'};

        expect(fight(autobot, decepticon)).toEqual(0);
    });
});

describe('parseBots', function() {

    it('should find 1 autobot and 2 decepticon', function () {
        var autobots = [];
        var decepticons = [];
        var list = [
            {'name': 'test', 'type': 'A'},
            {'name': 'test2', 'type': 'D'},
            {'name': 'test3', 'type': 'D'}
        ];
        parseBots(list, autobots, decepticons);
        expect(autobots.length).toEqual(1);
        expect(decepticons.length).toEqual(2);
    });

    it('should correct autobot', function () {
        var autobots = [];
        var decepticons = [];
        var list = [
            {'name': 'test', 'type': 'A'},
            {'name': 'test2', 'type': 'D'}
        ];
        parseBots(list, autobots, decepticons);
        expect(autobots[0].name).toEqual('test');
    });

    it('should find correct decepticon', function () {
        var autobots = [];
        var decepticons = [];
        var list = [
            {'name': 'test', 'type': 'A'},
            {'name': 'test2', 'type': 'D'}
        ];
        parseBots(list, autobots, decepticons);
        expect(decepticons[0].name).toEqual('test2');
    });
});

describe('returnOverallRating', function () {

    it('should return 5', function () {
        var bot = {
            'strength': 1,
            'intelligence': 1,
            'speed': 1,
            'endurance': 1,
            'firepower': 1
        };
        expect(returnOverallRating(bot)).toEqual(5);
    })

    it('should return 5', function () {
        var bot = {
            'strength': 3,
            'intelligence': 3,
            'speed': 3,
            'endurance': 3,
            'firepower': 3
        };
        expect(returnOverallRating(bot)).toEqual(15);
    })
});

describe('sortTransformers', function () {

    it('should sort transformers', function () {
        var list = [
            {rank: 3},
            {rank: 1},
            {rank: 5},
            {rank: 2}
        ]
        sortTransformers(list);
        expect(list[0]).toEqual({rank: 1});
        expect(list[3]).toEqual({rank: 5});
    })
});