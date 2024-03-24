import { Client, GatewayIntentBits } from 'discord.js';

// accesses
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.DirectMessages
    ], 
});

// bot login
client.login(process.env.DISCORD_TOKEN);