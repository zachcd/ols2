const Discord = require('discord.js');
const bot = new Discord.Client();
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

			msg.channel.sendMessage(lib.createPlayer(ign, elo, isOwner));
		}
	}

	//add a new team ex : '-createTeam <name> <owner>'
	else if (msg.content.startsWith(prefix + 'createTeam')) {
		if (args.length != 2) msg.channel.sendMessage('Usage: -createTeam <name> <owner>');

		else {
			const name = args[0];
			const ign = args[1];

			msg.channel.sendMessage(lib.createTeam(name, ign));
		}
	}

  //list players of a team ex : '-listPlayers <teamName>'
	else if (msg.content.startsWith(prefix + 'listPlayers')) {
		if (args.length != 1) msg.channel.sendMessage('Usage: -listPlayers <teamName>');

		else {
			const teamName = args[0];

			msg.channel.sendMessage(lib.listPlayers(teamName));
		}
	}

	//adds a player to a team ex : '-addPlayer <playerName> <teamName>'
	else if (msg.content.startsWith(prefix + 'addPlayer')) {
		if (args.length != 2) msg.channel.sendMessage('Usage: -addPlayer <playerName> <teamName>');

		else {
			const playerName = args[0];
			const teamName = args[1];

			msg.channel.sendMessage(lib.addPlayerToTeam(playerName, teamName));
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

//TODO find another way to save key
bot.login(process.argv[2]);
