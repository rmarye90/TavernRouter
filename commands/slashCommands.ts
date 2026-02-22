import { SlashCommandBuilder } from "discord.js";
import type { SocialLinks } from "../config.ts";

const PLATFORM_LABELS: Record<string, string> = {
  instagram: "Instagram",
  twitter: "Twitter/X",
  tiktok: "TikTok",
  youtube: "YouTube",
  twitch: "Twitch",
  commu: "World of Warcraft",
};

type SlashCommandLike = SlashCommandBuilder | ReturnType<SlashCommandBuilder["addStringOption"]>;

export function getSlashCommands(socialLinks: SocialLinks): SlashCommandLike[] {
  const lienChoices = Object.keys(socialLinks).map((key) => ({
    name: PLATFORM_LABELS[key] ?? key,
    value: key,
  }));

  return [
    new SlashCommandBuilder()
      .setName("liens")
      .setDescription("Affiche tous les liens des réseaux sociaux"),
    new SlashCommandBuilder()
      .setName("lien")
      .setDescription("Affiche le lien d'un réseau social spécifique")
      .addStringOption((option) =>
        option
          .setName("reseau")
          .setDescription("Le réseau social à afficher")
          .setRequired(true)
          .addChoices(...lienChoices)
      ),
  ];
}
