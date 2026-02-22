export interface SocialLinks {
  [platform: string]: string;
}

export interface SocialMessages {
  [platform: string]: string;
}

export const socialLinks: SocialLinks = {
  instagram: "https://www.instagram.com/skylissfr/",
  twitter: "https://x.com/skylissfr?s=21&t=qOePYrbWYQYSxn08ly1ZVg",
  tiktok: "https://www.tiktok.com/@skylissfr?_t=ZN-8ybH6IyHybu&_r=1",
  youtube: "https://youtube.com/@skylissfr?si=K-ejxNjj0R2SHOXF",
  twitch: "https://www.twitch.tv/skylissfr",
};

export const socialMessages: SocialMessages = {
  instagram: "📸 Suivez-nous sur Instagram !",
  twitter: "🐦 Retrouvez-nous sur Twitter !",
  tiktok: "🎵 Découvrez nos vidéos sur TikTok !",
  youtube: "🎥 Abonnez-vous à notre chaîne YouTube !",
  twitch: "🎮 Suivez nos streams sur Twitch !",
};
