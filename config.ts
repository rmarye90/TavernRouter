export interface SocialLinks {
  [platform: string]: string;
}

export interface SocialMessages {
  [platform: string]: string;
}

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
}

export function loadSocialLinks(): SocialLinks {
  const links: SocialLinks = {};
  if (process.env.SOCIAL_INSTAGRAM) links.instagram = process.env.SOCIAL_INSTAGRAM;
  if (process.env.SOCIAL_TWITTER) links.twitter = process.env.SOCIAL_TWITTER;
  if (process.env.SOCIAL_TIKTOK) links.tiktok = process.env.SOCIAL_TIKTOK;
  if (process.env.SOCIAL_YOUTUBE) links.youtube = process.env.SOCIAL_YOUTUBE;
  if (process.env.SOCIAL_YOUTUBE_MUSIC) links.youtubemusic = process.env.SOCIAL_YOUTUBE_MUSIC;
  if (process.env.SOCIAL_TWITCH) links.twitch = process.env.SOCIAL_TWITCH;
  if (process.env.SOCIAL_COMMU) links.commu = process.env.SOCIAL_COMMU;
  return links;
}

export const socialMessages: SocialMessages = {
  instagram: "📸 Suivez-nous sur Instagram !",
  twitter: "🐦 retrouver l’actu et des astuces chaque jour sur x !",
  tiktok: "🎵 Découvrez nos vidéos sur TikTok !",
  youtube: "🎥 Abonnez-vous à notre chaîne YouTube !",
  youtubemusic: "🎵 Écoutez la musique de la commu sur YouTube !",
  twitch: "🎮 Suivez nos streams sur Twitch !",
  commu: "🎮 Rejoignez notre communauté sur World of Warcraft !",
};
