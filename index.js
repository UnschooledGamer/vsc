const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => { 
  if (message.content === `${config.prefix}ping`) {
    message.channel.send("pong");
  } 
});
client.login("ODQ2MzgxNzM4MTQyMDcyODMz.YKusaw.8NkWmZxAg-pdpWa8Zgs5_LW-wAQ")
