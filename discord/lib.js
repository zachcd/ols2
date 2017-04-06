const mongoose = require('mongoose');
const dbuser = process.argv[3];
const dbpass = process.argv[4];

//register models
const Team = require('../models/Team');
const Player = require('../models/Player');
const Contract = require('../models/Contract');

//TODO change?
mongoose.connect('mongodb://' + dbuser +':' + dbpass +
'@ds147510.mlab.com:47510/olsdev');

function createPlayer(a_ign, a_elo, a_isOwner) {
	let returnMsg = 'Unspecified Error';

	//create player
	let newPlayer = new Player({
		name: a_ign,
		elo: a_elo,
		isOwner: a_isOwner
	});

	//save the new user
	newPlayer.save(function(err) {
		if (err) returnMsg = 'Error creating new player ' + a_ign;
		else returnMsg = a_ign + ' successfully created.';
	});

	return returnMsg;
}

function createTeam(a_name, a_ign) {
	let returnMsg = 'Unspecified Error';

	//create team first, save later
	let newTeam = new Team({
		name: a_name,
		owner: a_ign
	});

	//find the user, make sure they are an owner, and then set their team
	User.findOne({ign: a_ign}, function(err, user) {
		if (err || !user) returnMsg = 'Error finding ' + a_ign;
		else if (!user.isOwner) returnMsg = 'Please give ' + a_ign + ' ownership rights first';
		else {
			user.team = a_name;
			user.save(function(err) {
				if (err) returnMsg = 'Error updating owner: ' + err;
				else {
					//save the team roster
					newTeam.save(function(err) {
						if (err) returnMsg = 'Error creating new team: ' + err;
						else returnMsg = 'Team ' + a_name + ' created with owner ' + a_ign;
					});
				}
			});
		}
	});

	return returnMsg;
}

function listPlayers(teamName) {
	let returnMsg = 'Unspecified Error';

	//find the team
	User.find({team: teamName}, function(err, players) {
		if (err) returnMsg = 'Error listing players of team ' + teamName + ' : ' + err;
		if (players.length == 0) returnMsg = 'Team ' + teamName + ' has no players!';
		else {
			//print the roster in one string
			let outStr = 'Team ' + teamName + ' has:';
			players.forEach(function(player) {
				outStr += '\n' + player.ign + ' with an elo of: ' + player.elo;
			});
			returnMsg = outStr;
		}
	});

	return returnMsg;
}

function addPlayerToTeam(playerName, teamName) {
	let returnMsg = 'Unspecified Error';

	//update the team's roster first
	Team.findOne({name: teamName}, function(err, team) {
		if (err) returnMsg = 'Error updating the ' + teamName + 'roster';
		else if (!team) returnMsg = teamName + ' does not exist!';
		else {
			if (!team.players) team.players = [];
			team.players.push(playerName);

			//now find the user to update their team
			User.findOne({ign: playerName}, function(err, user) {
				if (err) returnMsg = 'Error updating ' + playerName + '\'s team';
				if (!user) returnMsg = playerName + ' does not exist!';
				else {
					user.team = teamName;

					//don't save team changes unless we know user's succeeds
					user.save(function(err) {
						if (err) console.log(err);
						else {
							team.save(function(err) {
								if (err) returnMsg = 'Error adding ' + playerName + 'to ' + teamName;
								else returnMsg = playerName + ' added to ' + teamName + ' successfully';
							});
						}
					}); //save user/team

				}
			}); //finding the user
		}
	}); //finding the team

	return returnMsg;
}

//lets define exports here for now instead of inline
exports.createPlayer = createPlayer;
exports.createTeam = createTeam;
exports.listPlayers = listPlayers;
exports.addPlayerToTeam = addPlayerToTeam;
