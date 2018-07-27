const Discord = require('discord.js');
const client = new Discord.Client();
const Database = require('./database.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDcxMDI1NzI5NTUxODU5NzM0.Dje2hQ.8f3tjYOmDRHEM0HPXiVbJXeXqwQ');
