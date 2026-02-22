import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import { handleReady } from "./events/ready.ts";
import { handleInteractionCreate } from "./events/interactionCreate.ts";
import { handleMessageCreate } from "./events/messageCreate.ts";
import { registerErrorHandlers } from "./events/error.ts";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", (c) => handleReady(c));
client.on("interactionCreate", (i) => handleInteractionCreate(i));
client.on("messageCreate", (m) => handleMessageCreate(m));
registerErrorHandlers(client);

client.login(process.env.DISCORD_TOKEN);