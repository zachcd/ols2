const Discord = require('discord.js');
const bot = new Discord.Client();

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

function createPlayer(a_ign, a_elo, a_isOwner, cb) {
	//create player
	let newPlayer = new Player({
		name: a_ign,
		elo: a_elo,
		isOwner: a_isOwner
	});

		//save the new user
	newPlayer.save(function(err) {
		if (err) cb('Error creating new player ' + a_ign);
		else cb(a_ign + ' successfully created.')
	});
}

function createTeam(teamName, a_ign, cb) {
	//find the player, make sure they are an owner, and then set their team
	Player.findOne({name: a_ign}, function(err, player) {
		if (err || !player) cb('Error finding ' + a_ign);
		else if (!player.isOwner) cb('Please give ' + a_ign + ' ownership rights first');
		else {
			//create new team now
			let newTeam = new Team({
				name: teamName,
				owner: player
			});

			player.team = teamName;

			player.save(function(err) {
				if (err) cb('Error updating owner: ' + err);
				else {
					//save the team roster
					newTeam.save(function(err) {
						if (err) cb('Error creating new team: ' + err);
						else cb('Team ' + teamName + ' created with owner ' + a_ign);
					});
				}
			});
		}
	});

}

function listPlayers(teamName, cb) {
	//find the team
	Player.find({team: teamName}, function(err, players) {
		if (err) cb('Error listing players of team ' + teamName + ' : ' + err);
		if (players.length == 0) cb('Team ' + teamName + ' has no players!');
		else {
			//print the roster in one string
			let outStr = 'Team ' + teamName + ' has:';
			players.forEach(function(player) {
				outStr += '\n' + player.name + ' with an elo of: ' + player.elo;
			});
			cb(outStr);
		}
	});

}

function addPlayerToTeam(playerName, teamName, cb) {
	//update the team's roster first
	Team.findOne({name: teamName}, function(err, team) {
		if (err) cb('Error updating the ' + teamName + 'roster');
		else if (!team) cb(teamName + ' does not exist!');
		else {
			//now find the user to update their team
			Player.findOne({name: playerName}, function(err, player) {
				if (err) cb('Error updating ' + playerName + '\'s team');
				if (!player) cb(playerName + ' does not exist!');
				else {
					if (!team.players) team.players = [];
					team.players.push(player);

					player.team = teamName;

					//don't save team changes unless we know user's succeeds
					player.save(function(err) {
						if (err) cb('Error saving player: ' + err);
						else {
							team.save(function(err) {
								if (err) cb('Error adding ' + playerName + 'to ' + teamName);
								else cb(playerName + ' added to ' + teamName + ' successfully');
							});
						}
					}); //save user/team

				}
			}); //finding the user
		}
	}); //finding the team

}

//lets define exports here for now instead of inline
exports.createPlayer = createPlayer;
exports.createTeam = createTeam;
exports.listPlayers = listPlayers;
exports.addPlayerToTeam = addPlayerToTeam;
