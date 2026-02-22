import type { Client } from "discord.js";

export function registerErrorHandlers(client: Client): void {
  client.on("error", (error: Error) => {
    console.error("❌ Erreur Discord.js:", error);
  });
  process.on("unhandledRejection", (error: unknown) => {
    console.error("❌ Promesse rejetée non gérée:", error);
  });
}
