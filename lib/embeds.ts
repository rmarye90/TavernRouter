import { EmbedBuilder } from "discord.js";
import type { SocialLinks, SocialMessages } from "../config.ts";

const EMBED_COLOR = "#5865F2";

export function buildAllLinksEmbed(
  socialLinks: SocialLinks,
  socialMessages: SocialMessages
): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setTitle("🔗 Tous nos réseaux sociaux")
    .setDescription("Retrouvez-nous sur toutes ces plateformes !")
    .setColor(EMBED_COLOR as `#${string}`)
    .setTimestamp();

  for (const [platform, value] of Object.entries(socialLinks)) {
    const message = socialMessages[platform] ?? `Visitez notre ${platform}`;
    const fieldValue = value.startsWith("http")
      ? `[Cliquez ici](${value})`
      : `\`${value}\``;
    embed.addFields({
      name: message,
      value: fieldValue,
      inline: true,
    });
  }

  return embed;
}

export function buildSingleLinkEmbed(
  platform: string,
  socialLinks: SocialLinks,
  socialMessages: SocialMessages
): EmbedBuilder {
  const value = socialLinks[platform];
  const message = socialMessages[platform] ?? `Visitez notre ${platform}`;
  const description = value.startsWith("http")
    ? `[Cliquez ici pour accéder à notre ${platform}](${value})`
    : `Copie ce code dans le jeu :\n\`\`\`\n${value}\n\`\`\``;
  return new EmbedBuilder()
    .setTitle(message)
    .setDescription(description)
    .setColor(EMBED_COLOR as `#${string}`)
    .setTimestamp();
}
