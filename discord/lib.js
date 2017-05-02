const mongoose = require('mongoose');
const config = require('config.json')('config.json');

//register models
const Team = require('../models/Team');
const Player = require('../models/Player');
const Contract = require('../models/Contract');
const User = require('../models/User');

mongoose.connect(config.mongodbUri);

exports.createUser = function(owner, player, admin, uname, cb) {

	let newUser = new User({
		isOwner: owner,
		isPlayer: player,
		isAdmin: admin,
		username: uname,
		accounts: []
	});

	newUser.save(function(err) {
		if (err) cb('Error creating new user ' + uname);
		else cb('User ' + uname + ' successfully created.');
	});

}

exports.createPlayer = function(uname, a_ign, a_elo, cb) {
	//find user
	User.findOne({username: uname}, function(err, userAccount) {
		if (err) cb('Unable to find ' + uname);
		else {
			//create player
			let newPlayer = new Player({
				ign: a_ign,
				elo: a_elo,
				user: userAccount
			});

				//save the new user
			newPlayer.save(function(err) {
				if (err) cb('Error creating new player ' + a_ign);
				else cb(a_ign + ' successfully created.')
			});

			if (!userAccount.accounts) userAccount.accounts = [];
			userAccount.accounts.push(newPlayer);
			userAccount.save(function(err) {
				if (err) cb('Error linking ' + newPlayer.ign + ' to ' + uname);
			});
		}
	});
}

exports.createTeam = function(teamName, uname, cb) {
	//find the player, make sure they are an owner, and then set their team
	User.findOne({username: uname}, function(err, user) {
		if (err || !user) cb('Error finding ' + uname);
		else if (!user.isOwner) cb('Please give ' + uname + ' ownership rights first');
		else {
			//create new team now
			let newTeam = new Team({
				name: teamName,
				owner: user,
				players: []
			});

			user.team = newTeam;

			user.save(function(err) {
				if (err) cb('Error updating owner: ' + err);
				else {
					//save the team roster
					newTeam.save(function(err) {
						if (err) cb('Error creating new team: ' + err);
						else cb('Team ' + teamName + ' created with owner ' + uname);
					});
				}
			});
		}
	});

}

exports.listPlayers = function(teamName, cb) {
	//find the team
	Team.findOne({name: teamName})
		.populate('players')
		.exec(function (err, team) {
		  if (err) cb('Error listing players');
			else{
				//print the roster in one string
				let outStr = 'Team ' + teamName + ' has:';
				team.players.forEach(function(player) {
					outStr += '\n' + player.ign + ' with an elo of: ' + player.elo;
				});
				cb(outStr);
			}
		});
}

exports.setUserTeam = function(uname, teamName, cb) {
	Team.findOne({name: teamName}, function(err, team) {
		if (err) cb('Error finding team: ' + teamName);
		else {
			User.findOne({username: uname}, function(err, user) {
				if (err) cb('Error finding user: ' + uname);
				else {
					user.team = team;
					user.save(function(err) {
						if(err) cb('Error saving user');
						else cb('Successfully set ' + uname + '\'s team to ' + teamName);
					});
				}
			});
		}
	});
}

exports.addPlayerToTeam = function(a_ign, teamName, cb) {
	//update the team's roster first
	Team.findOne({name: teamName}, function(err, team) {
		if (err) cb('Error updating the ' + teamName + 'roster');
		else if (!team) cb(teamName + ' does not exist!');
		else {
			//now find the user to update their team
			Player.findOne({ign: a_ign})
				.populate('user')
				.exec(function(err, player) {
				if (err) cb('Error updating ' + playerName + '\'s team');
				if (!player) cb(playerName + ' does not exist!');
				else {
					if (!team.players) team.players = [];
					team.players.push(player);
					player.user.team = team;

					player.save(function(err) {
						if (err) cb('Error adding player to team!');
						else {
							team.save(function(err) {
								if (err) cb('Error adding ' + playerName + 'to ' + teamName);
								else cb(a_ign + ' added to ' + teamName + ' successfully');
							});
						}
					});
				}
			}); //finding the user
		}
	}); //finding the team

}
