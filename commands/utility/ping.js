// discord command jargon
const { SlashCommandBuilder } = require('discord.js');

// module.exports to be read by other files
module.exports = {
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		console.log('Ping command received!');
		await interaction.reply('Pongers!');
	},
};
