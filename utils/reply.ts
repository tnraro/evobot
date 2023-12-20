import { ChatInputCommandInteraction, InteractionReplyOptions } from "discord.js";

export function reply(interaction: ChatInputCommandInteraction, content: string | InteractionReplyOptions) {
  if (interaction.replied) return interaction.followUp(content).catch(console.error);
  else return interaction.reply(content).catch(console.error);
}