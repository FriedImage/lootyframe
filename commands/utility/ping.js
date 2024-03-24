// discord command jargon
const { SlashCommandBuilder } = require('discord.js');

// module.exports to be read by other files
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		console.log('Ping command received!');
		await interaction.reply('Pong!');
	},
};
