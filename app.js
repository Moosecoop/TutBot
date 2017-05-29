const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./token.json');

client.on('ready', () => {
    console.log('I\'m ready');
});

var prefix = "?";

client.on('message', msg => {
    let args = msg.content.split(' ').slice(1);
    let argsOrig = msg.content.split(' ');
    var result = args.join(' ');
    var command = argsOrig[0].split('').slice(1).join('').toLowerCase();

    if(!msg.content.startsWith(prefix)) return;
    if(msg.author.bot) return;

    if(command === "ping") {
        msg.channel.send(`Pong! \`${Date.now() - msg.createdTimestamp}ms\``);
    }

});

client.login(token.token);

