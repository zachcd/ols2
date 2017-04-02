const mongoose = require('mongoose');
const Discord = require("discord.js");
const bot = new Discord.Client();

const dbuser = process.argv[3];
const dbpass = process.argv[4];

//register models
const Team = require('../models/Team');
const User = require('../models/User');
const Contract = require('../models/Contract');

//TODO change?
mongoose.connect('mongodb://' + dbuser +':' + dbpass +
'@ds147510.mlab.com:47510/olsdev');

bot.on("message", msg => {

  let prefix="-"

  if(!msg.content.startsWith(prefix)) return;

  if(msg.author.bot) return;

	const args = msg.content.split(" ").splice(1);

  if (msg.content.startsWith(prefix + "fuck")) {
    msg.channel.sendMessage("Fuck Smegs!");
  }

  else if (msg.content.startsWith(prefix + "fugg")) {
    msg.channel.sendMessage("XD");
  }

	//TODO better way to create players, if needed on discord at all?
  //create a new user ex : '-createPlayer <ign> <elo> <isOwner>'
	else if (msg.content.startsWith(prefix + "createPlayer")) {
		if (args.length != 3) msg.channel.sendMessage('Usage: -createPlayer <ign> <elo> <isOwner>');
		else {
			const a_ign = args[0];
			const a_elo = parseInt(args[1]);
			const a_isOwner = (args[2] == 'true');

			//create user
			let newPlayer = new User({
				ign: a_ign,
				elo: a_elo,
				isOwner: a_isOwner
			});

			//save the new user
			newPlayer.save(function(err) {
				if (err) msg.channel.sendMessage('Error creating new player ' + a_ign);
				else msg.channel.sendMessage(a_ign + ' successfully created.')
			});
		}
	}

	//add a new team ex : '-createTeam <name> <owner>'
	else if (msg.content.startsWith(prefix + "createTeam")) {
		if (args.length != 2) msg.channel.sendMessage('Usage: -createTeam <name> <owner>');

		else {
			const a_name = args[0];
			const a_ign = args[1];

			//create team first, save later
			let newTeam = new Team({
				name: a_name,
				owner: a_ign
			});

			//find the user, make sure they are an owner, and then set their team
			User.findOne({ign: a_ign}, function(err, user) {
				if (err || !user) msg.channel.sendMessage('Error finding ' + a_ign);
				else if (!user.isOwner) msg.channel.sendMessage('Please give ' + a_ign + ' ownership rights first');
				else {
					user.team = a_name;
					user.save(function(err) {
						if (err) msg.channel.sendMessage('Error updating owner: ' + err);
						else {
							//save the team roster
							newTeam.save(function(err) {
								if (err) msg.channel.sendMessage('Error creating new team: ' + err);
								else msg.channel.sendMessage('Team ' + a_name + ' created with owner ' + a_ign);
							});
						}
					})
				}
			});
		}
	}

  //list players of a team ex : '-listPlayers <teamName>'
	else if (msg.content.startsWith(prefix + "listPlayers")) {
		if (args.length != 1) msg.channel.sendMessage('Usage: -listPlayers <teamName>');

		else {
			const teamName = args[0];

			//find the team
			User.find({team: teamName}, function(err, players) {
				if (err) msg.channel.sendMessage('Error listing players of team ' + teamName + ' : ' + err);
				if (players.length == 0) msg.channel.sendMessage('Team ' + teamName + ' has no players!');
				else {
					//print the roster in one string
					let outStr = 'Team ' + teamName + ' has:';
					players.forEach(function(player) {
						outStr += '\n' + player.ign + ' with an elo of: ' + player.elo;
					});
					msg.channel.sendMessage(outStr);
				}
			});
		}
	}

	//adds a player to a team ex : '-addPlayer <playerName> <teamName>'
	else if (msg.content.startsWith(prefix + "addPlayer")) {
		if (args.length != 2) msg.channel.sendMessage('Usage: -addPlayer <playerName> <teamName>');

		else {
			const playerName = args[0];
			const teamName = args[1];

			//update the team's roster first
			Team.findOne({name: teamName}, function(err, team) {
				if (err) msg.channel.sendMessage('Error updating the ' + teamName + 'roster');
				else if (!team) msg.channel.sendMessage(teamName + ' does not exist!');
				else {
					if (!team.players) team.players = [];
					team.players.push(playerName);

					//now find the user to update their team
					User.findOne({ign: playerName}, function(err, user) {
						if (err) msg.channel.sendMessage('Error updating ' + playerName + '\'s team');
						if (!user) msg.channel.sendMessage(playerName + ' does not exist!');
						else {
							user.team = teamName;

							//don't save team changes unless we know user's succeeds
							user.save(function(err) {
								if (err) console.log(err);
								else {
									team.save(function(err) {
										if (err) msg.channel.sendMessage('Error adding ' + playerName + 'to ' + teamName);
										else msg.channel.sendMessage(playerName + ' added to ' + teamName + ' successfully');
									});
								}
							});
						}
					});
				}
			});
		}
	}

})

bot.on("guildMemberAdd", (member) => {
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
    member.guild.defaultChannel.sendMessage(`Welcome to the LoL@Pitt Discord "${member.user.username}"!`);
});

bot.on('ready', () => {
  console.log('I am ready');
})

bot.on('error', e => { console.error(e); });

//TODO find another way to save key
bot.login(process.argv[2]);
