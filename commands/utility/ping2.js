// discord command jargon
const { SlashCommandBuilder } = require('discord.js');

// module.exports to be read by other files
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping2')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		console.log('O efthi!');
		await interaction.reply('Pong!');
	},
};
