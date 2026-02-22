import "dotenv/config";

const CLIENT_ID = process.env.CLIENT_ID;

if (!CLIENT_ID) {
  console.log("❌ CLIENT_ID manquant dans le fichier .env");
  process.exit(1);
}

const inviteURL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=277025508352&scope=bot%20applications.commands`;

console.log("🔗 Lien d'invitation du bot:");
console.log(inviteURL);
console.log("");
console.log(
  "📋 Copiez ce lien dans votre navigateur pour inviter le bot sur votre serveur Discord"
);
console.log("");
console.log("✅ Permissions incluses:");
console.log("  - Envoyer des messages");
console.log("  - Utiliser des liens externes");
console.log("  - Intégrer des liens");
console.log("  - Utiliser des commandes slash");
