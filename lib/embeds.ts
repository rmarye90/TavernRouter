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

  for (const [platform, url] of Object.entries(socialLinks)) {
    const message = socialMessages[platform] ?? `Visitez notre ${platform}`;
    embed.addFields({
      name: message,
      value: `[Cliquez ici](${url})`,
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
  const url = socialLinks[platform];
  const message = socialMessages[platform] ?? `Visitez notre ${platform}`;
  return new EmbedBuilder()
    .setTitle(message)
    .setDescription(`[Cliquez ici pour accéder à notre ${platform}](${url})`)
    .setColor(EMBED_COLOR as `#${string}`)
    .setTimestamp();
}
