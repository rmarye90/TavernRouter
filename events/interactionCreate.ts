import type { BaseInteraction } from "discord.js";
import { loadSocialLinks, socialMessages } from "../config.ts";
import { buildAllLinksEmbed, buildSingleLinkEmbed } from "../lib/embeds.ts";

export async function handleInteractionCreate(
  interaction: BaseInteraction
): Promise<void> {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  const socialLinks = loadSocialLinks();

  if (commandName === "liens") {
    const embed = buildAllLinksEmbed(socialLinks, socialMessages);
    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (commandName === "lien") {
    const reseau = interaction.options.getString("reseau", true);
    if (!socialLinks[reseau]) {
      await interaction.reply({
        content: "❌ Réseau social non trouvé!",
        ephemeral: true,
      });
      return;
    }
    const embed = buildSingleLinkEmbed(reseau, socialLinks, socialMessages);
    await interaction.reply({ embeds: [embed] });
  }
}
