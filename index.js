const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content === '.ping') {
    msg.reply('pong');
  }
});

client.on('messageCreate', msg => {
    if (msg.content === '.bread') {
      msg.reply(':bread:');
    }
  });

  client.on('messageCreate', msg => {
    if (msg.content === '.stone') {
      msg.reply(':emoji_15:');
    }
  });

client.login('OTI2MjA0ODQ0ODk5OTgzMzYw.GQTNIM.jj6jbWCfv_mvRZSj9VVPICy0_czJ6hrMCzuGOI');