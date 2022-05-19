const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', msg => {
  if (msg.content === '.help') {
    msg.reply('```commands, .help . ping .bread .drink .breadgod .connection```');
  }
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
    if (msg.content === '.drink') {
      msg.reply('Ok, i have :beer:');
    }
  });

  client.on('messageCreate', msg => {
    if (msg.content === '.breadgod') {
      msg.reply('Im beginning to feel like a Bread God, Bread God All my people from the front to the back nod, back nod Now, who thinks their arms are long enough to slap box, slap box? They said I eat Bread like a robot, so call me Bread-bot.');
    }
  });

client.on('messageCreate', message => {
  if (message.content === '.connection') {  
    message.channel.send(`latency is ${Date.now() - message.createdTimestamp}ms. Discord API latency is ${Math.round(client.ws.ping)}ms`);
  }
});



client.login('bottokenhere').then(() => {
  client.user.setPresence({ activities: [{ name: '.help | https://discord.gg/eAEWHD9E4c', type: 'PLAYING' }], status: 'online' });
});
