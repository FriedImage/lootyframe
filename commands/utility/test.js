// discord command jargon
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.on('message', async (message) => {
	try {
		if (message.content.toLowerCase() === 'test') {
			await message.channel.send('gc');
		}
	}
	catch (error) {
		console.error('Error:', error);
	}
});