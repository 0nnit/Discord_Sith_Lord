// This is importing the Discord.js Library
const Discord = require('discord.js');
//This is importing the botSettings.
const botSettings = require('./storage/botSettings.json');
//This is the commands list import.
const cmdSettings = require('./storage/commands.txt');
//This is declaring the Discord clieat as the bot. 
const bot = new Discord.Client();

// This part will be a message that the bot displays once it comes online and ever 24 hours after that. 
 
bot.on('ready', 'message', (message) => {
   
    console.log("Sith_Lord is Running version: 0.0.1. Use Control + C to exit the bot." );
    const botName = bot.user.username; 
    if(bot.login){
    	message('\"I will show you the Dark Side!\"  -Kylo Ren/Ben Solo \r \r  I am a' + ${botName} + 
    		'and I am here to serve you my master. I will provide you with daily updates from Star Wars News' + 
    		'Net (StarWarsNewsNet.com), along with provideing you an outlet to practice your force powers on' + 
    		'master. Command me as you wish! \n \n Looking for help in growing your force powers? Just type' + 
            '/holocron for a list and discription of each availble force power.  \r \r   \"You do not know the' + 
    		'power of the dark side\" - Darth Vader/Anakin Skywalker');
    }

}); 


// This is a test for the API. A simple Ping Pong Game.

bot.on('message', (message) => {
    
    if(message.author.bot) return;
    if(message.content == 'ping'){
       message.reply('pong'); 
    }
    
});




bot.login(botSettings.token);