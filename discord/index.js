const mongoose = require('mongoose');
const Discord = require("discord.js");
const bot = new Discord.Client();

const dbuser = process.argv[3];
const dbpass = process.argv[4];

//register models
const Team = require('../models/Team');
const User = require('../models/User');
const Contract = require('../models/Contract');

mongoose.connect('mongodb://' + dbuser +':' + dbpass +
'@ds147510.mlab.com:47510/olsdev');

bot.on("message", msg => {

  let prefix="-"

  if(!msg.content.startsWith(prefix)) return;

  if(msg.author.bot) return;

  if (msg.content.startsWith(prefix + "fuck")) {
    msg.channel.sendMessage("Fuck Smegs!");
  }
  else if (msg.content.startsWith(prefix + "fugg")) {
    msg.channel.sendMessage("XD");
  }

	else if (msg.content.startsWith(prefix + "register")) {

	}

	else if (msg.content.startsWith(prefix + "createTeam")) {

	}

	else if (msg.content.startsWith(prefix + "players")) {

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
