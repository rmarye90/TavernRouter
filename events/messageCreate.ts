import type { Message } from "discord.js";
import { socialLinks, socialMessages } from "../config.ts";
import { buildAllLinksEmbed, buildSingleLinkEmbed } from "../lib/embeds.ts";

export async function handleMessageCreate(message: Message): Promise<void> {
  if (message.author.bot) return;

  const prefix = "!";
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/\s+/);
  const command = args.shift()?.toLowerCase() ?? "";

  if (command === "liens" || command === "reseaux") {
    const embed = buildAllLinksEmbed(socialLinks, socialMessages);
    await message.reply({ embeds: [embed] });
    return;
  }

  if (socialLinks[command]) {
    const embed = buildSingleLinkEmbed(command, socialLinks, socialMessages);
    await message.reply({ embeds: [embed] });
  }
}
