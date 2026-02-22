import { REST, Routes, ActivityType } from "discord.js";
import type { Client } from "discord.js";
import { getSlashCommands } from "../commands/slashCommands.ts";
import { socialLinks } from "../config.ts";

export async function handleReady(client: Client<true>): Promise<void> {
  console.log(`✅ Bot connecté en tant que ${client.user.tag}!`);

  try {
    const rest = new REST({ version: "10" }).setToken(
      process.env.DISCORD_TOKEN ?? ""
    );
    const commands = getSlashCommands(socialLinks).map((c) => c.toJSON());

    console.log("🔄 Actualisation des commandes slash...");
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: commands,
    });
    console.log("✅ Commandes slash mises à jour avec succès!");
  } catch (error) {
    console.error("❌ Erreur lors de l'actualisation des commandes:", error);
  }

  client.user.setActivity("Partager vos liens sociaux!", {
    type: ActivityType.Playing,
  });
}
