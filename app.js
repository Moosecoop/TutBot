const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./token.json');

client.on('ready', () => {
    console.log('I\'m ready');
});

var prefix = "?";

client.on('message', msg => {
    if(msg.author === client.user) return;
    if(msg.content.startsWith(prefix)) {
        var command = msg.content;
        if(command === "?ping"){
            msg.reply('Pong!');
        }
    }
});

client.login(token.token);

