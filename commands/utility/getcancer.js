const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios'); // For making HTTP requests
const cheerio = require('cheerio'); // For parsing HTML

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get information about a Warframe item')
        .addStringOption(option =>
            option.setName('item')
                .setDescription('The item you want information about')
                .setRequired(true)),

    async execute(interaction) {
        // Get the item name from the command arguments
        const itemName = interaction.options.getString('item');

        try {
            // Fetch the drop table page
            const response = await axios.get('https://www.warframe.com/droptables');
            const html = response.data;

            // Load the HTML into cheerio
            const $ = cheerio.load(html);

            // Find the item's location and drop chances
            const itemInfo = $('tr').filter((i, el) => {
                // Adjust the selector to match the structure of the website
                return $(el).text().toLowerCase().includes(itemName.toLowerCase());
            }).find('td').slice(1, 3).map((i, el) => $(el).text()).get();

            if (itemInfo.length === 0) {
                await interaction.reply(`Item "${itemName}" not found.`);
                return;
            }

            const [location, chance] = itemInfo;

            // Send the item information back to the user
            await interaction.reply(`**${itemName}**: Location: ${location}, Chance: ${chance}`);
        } catch (error) {
            console.error(error);
            await interaction.reply('There was an error fetching the information.');
        }
    },
};
