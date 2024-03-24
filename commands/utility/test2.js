
const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('infooooo')
		.setDescription('info for specific item'),
	async execute(interaction) {
		console.log('Info command received!');
		await interaction.reply('I dont have a specific Instraction right now');
	},
};
