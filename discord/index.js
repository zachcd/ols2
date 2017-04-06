const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('config.json')('config.json');
const lib = require('./lib');

bot.on('message', msg => {

  let prefix='-'

  if(!msg.content.startsWith(prefix)) return;

  if(msg.author.bot) return;

	const args = msg.content.split(' ').splice(1);

  if (msg.content.startsWith(prefix + 'fuck')) {
    msg.channel.sendMessage('Fuck Smegs!');
  }

  else if (msg.content.startsWith(prefix + 'fugg')) {
    msg.channel.sendMessage('XD');
  }

  //create a new user ex : '-createPlayer <ign> <elo> <isOwner>'
	else if (msg.content.startsWith(prefix + 'createPlayer')) {
		if (args.length != 3) msg.channel.sendMessage('Usage: -createPlayer <ign> <elo> <isOwner>');
		else {
			const ign = args[0];
			const elo = parseInt(args[1]);
			const isOwner = (args[2] == 'true');

			lib.createPlayer(ign, elo, isOwner, function(returnMsg) {
				msg.channel.sendMessage(returnMsg);
			});

		}
	}

	//add a new team ex : '-createTeam <name> <owner>'
	else if (msg.content.startsWith(prefix + 'createTeam')) {
		if (args.length != 2) msg.channel.sendMessage('Usage: -createTeam <name> <owner>');

		else {
			const name = args[0];
			const ign = args[1];

			lib.createTeam(name, ign, function(returnMsg) {
				msg.channel.sendMessage(returnMsg);
			});
		}
	}

  //list players of a team ex : '-listPlayers <teamName>'
	else if (msg.content.startsWith(prefix + 'listPlayers')) {
		if (args.length != 1) msg.channel.sendMessage('Usage: -listPlayers <teamName>');

		else {
			const teamName = args[0];

			lib.listPlayers(teamName, function(returnMsg) {
				msg.channel.sendMessage(returnMsg);
			});
		}
	}

	//adds a player to a team ex : '-addPlayer <playerName> <teamName>'
	else if (msg.content.startsWith(prefix + 'addPlayer')) {
		if (args.length != 2) msg.channel.sendMessage('Usage: -addPlayer <playerName> <teamName>');

		else {
			const playerName = args[0];
			const teamName = args[1];

			lib.addPlayerToTeam(playerName, teamName, function(returnMsg) {
				msg.channel.sendMessage(returnMsg);
			});
		}
	}

});

bot.on('guildMemberAdd', (member) => {
    console.log(`New User '${member.user.username}' has joined '${member.guild.name}'` );
    member.guild.defaultChannel.sendMessage(`Welcome to the LoL@Pitt Discord '${member.user.username}'!`);
});

bot.on('ready', () => {
  console.log('I am ready');
});

bot.on('error', e => { console.error(e); });

bot.login(config.botToken);
