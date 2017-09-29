/**
 * @ngdoc Function
 * @name TransformerGame
 * @description
 * Game that takes a list of autobots and decepticons and has them do battle.
 * @params list of autobots and decepticons
 * @returns results from the battles
 */
function TransformerGame(listOfBots) {

    var autobots = [];
    var decepticons = [];
    var autobotWins = 0;
    var decepticonWins = 0;
    var result = {
        'battles': 0,
        'winningTeam': null,
        'losingTeam': null,
        'survivingAutobots': [],
        'survivingDecepticons': []
    };

    parseBots(listOfBots, autobots, decepticons);
    sortTransformers(autobots);
    sortTransformers(decepticons);

    var battles = 0;
    var fightResult = null;

    while (autobots.length > 0 && decepticons.length > 0) {
        //use pop as a way of going through the arrays from highest ranked
        var auto = autobots.pop();
        var decp = decepticons.pop();
        fightResult = fight(auto, decp);
        battles++;

        //Game Over - Optimus Prime vs Predaking
        if (fightResult === 9999999) {
            break;
        //Autobot won
        } else if (fightResult === 1) {
            autobotWins++;
            result.survivingAutobots.push(auto);
        //Decepticon won
        } else if (fightResult === 0){
            decepticonWins++;
            result.survivingDecepticons.push(decp);
        }
    }

    result.battles = battles;

    //adds surviving bots that did not have to fight
    result.survivingAutobots = result.survivingAutobots.concat(autobots);
    result.survivingDecepticons = result.survivingDecepticons.concat(decepticons);

    //Game Over
    if (fightResult === 9999999) {
        result.winningTeam = 'Neither';
        result.losingTeam = 'Both';
        result.survivingAutobots = [];
        result.survivingDecepticons = [];
    } else {
        if (autobotWins > decepticonWins) {
            result.winningTeam = 'Autobots';
            result.losingTeam = 'Decepticons';
        } else if (decepticonWins > autobotWins) {
            result.winningTeam = 'Decepticons';
            result.losingTeam = 'Autobots';
        } else {
            result.winningTeam = 'Neither';
            result.losingTeam = 'Both';
        }
    }

    return result;
}

/**
 * @name checkCourageAndStrength
 * @description
 * Check if any fighter is down 4 or more points of courage and
 * 3 or more points of strength
 * @return 1 if autobot wins, 0 if decepticon wins -1 if neither
 */
function checkCourageAndStrength(autobot, decepticon) {
    if (((autobot.courage - decepticon.courage) > 3) && ((autobot.strength - decepticon.strength) >2)) {
        return 1;
    } else if (((decepticon.courage - autobot.courage) > 3) && ((decepticon.strength - autobot.strength) > 2)) {
        return 0;
    } else {
        return -1;
    }
}

/**
 * @name checkSkill
 * @description
 * Check if any fighter is 3 or more points of skill
 * @return 1 if autobot wins, 0 if decepticon wins -1 if neither
 */
function checkSkill(autobot, decepticon) {
    if ((autobot.skill - decepticon.skill) > 2) {
        return 1;
    } else if ((decepticon.skill - autobot.skill) > 2) {
        return 0;
    } else {
        return -1;
    }
}

/**
 * @name checkOverallRating
 * @description
 * Compare overall rating
 * @return 1 if autobot wins, 0 if decepticon wins -1 tie
 */
function checkOverallRating(autobot, decepticon) {
    var autobotOverall = returnOverallRating(autobot);
    var decepticonOvarall = returnOverallRating(decepticon);
    if (autobotOverall > decepticonOvarall) {
        return 1;
    } else if (autobotOverall < decepticonOvarall) {
        return 0;
    } else {
        return -1;
    }
}

/**
 * @name fight
 * @description
 * Conduct the individual battle
 * @return 1 if autobot wins, 0 if decepticon wins, -1 if game over
 */
function fight(autobot, decepticon) {
    var autobotName = autobot.name.toLowerCase();
    var decepticonName = decepticon.name.toLowerCase();

    //Special rules
    if (autobotName === 'optimus prime' && decepticon.name.toLowerCase() === 'predaking') {
        return 9999999;
    } else if (autobotName === 'optimus prime') {
        return 1;
    } else if (decepticonName === 'predaking') {
        return 0;
    }

    //Basic rules
    var courageAndSkillCheck = checkCourageAndStrength(autobot, decepticon);
    if (courageAndSkillCheck !== -1) {
        return courageAndSkillCheck;
    }

    var skillCheck = checkSkill(autobot, decepticon);
    if (skillCheck !== -1) {
        return skillCheck;
    }

    return checkOverallRating(autobot, decepticon);
}

/**
 * @name parseBots
 * @description
 * go through list of bots and divide autobots and decepticons
 */
function parseBots(listOfBots, autobots, decepticons) {
    for (var i = 0; i < listOfBots.length; i++) {
        var bot = listOfBots[i];
        if (bot.type === 'A') {
            autobots.push(bot)
        } else {
            decepticons.push(bot);
        }
    }
}

/**
 * @name returnOveralRating
 * @description
 * return sum of strength, intelligence, speed, endurance, and firepower
 * @return return calculated sum
 */
function returnOverallRating(bot) {
    return bot.strength + bot.intelligence + bot.speed + bot.endurance + bot.firepower;
}

/**
 * @name sortTransformers
 * @description
 * Sorts the transformers by rank 10 > 1
 * @return sorted list
 */
function sortTransformers(listOfTransformers) {
    return listOfTransformers.sort(function (a, b) {
        return a.rank - b.rank;
    })
}