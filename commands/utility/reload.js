// discord command jargon
const { SlashCommandBuilder } = require('discord.js');

// module.exports to be read by other files
module.exports = {
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('reload')
		.setDescription('Reloads a command.')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('The command to reload.')
				.setRequired(true)),
	async execute(interaction) {
		const commandName = interaction.options.getString('command', true).toLowerCase();
		const command = interaction.client.commands.get(commandName);

		if (!command) {
			return interaction.reply(`There is no command with name \`${commandName}\`!`);
		}

		// Check only for me and efthis
		if (interaction.user.id === '266595826686623744' || interaction.user.id === '543923345234591764') {
			// Delete current command
			delete require.cache[require.resolve(`../${command.category}/${command.data.name}.js`)];

			// Reload new command
			try {
				interaction.client.commands.delete(command.data.name);
				const newCommand = require(`../${command.category}/${command.data.name}.js`);
				interaction.client.commands.set(newCommand.data.name, newCommand);
				await interaction.reply(`Command \`${newCommand.data.name}\` was reloaded!`);
			}
			catch (error) {
				console.error(error);
				await interaction.reply(`There was an error while reloading a command \`${command.data.name}\`:\n\`${error.message}\``);
			}
		}
		else {
			await interaction.reply(`You don't have the permissions to run \`${command.data.name}!`);
		}
	},
};
