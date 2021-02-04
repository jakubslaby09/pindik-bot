const Discord = require('discord.js');
const client = new Discord.Client();

console.log("test");

client.once('ready', () => {
    console.log("Pindik is ready!")
});

client.on('message', (message) => {
    if(message.content == 'test') message.reply('D');
})

const secret = require('./secret.js');
client.login(secret.secret);