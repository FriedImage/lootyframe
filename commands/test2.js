// discord command jargon
const { SlashCommandBuilder } = require('discord.js');

// module.exports to be read by other files
module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('info for specific item'),
	async execute(interaction) {
		console.log('Info command received!');
		await interaction.reply('I dont have a specific Instraction right now');
	},
};
