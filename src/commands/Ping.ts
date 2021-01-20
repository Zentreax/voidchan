import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class PingCommand extends Command {
	constructor() {
		super("ping", {
			aliases: ["ping"]
		});
	}

	public exec(message: Message) {
		return message.util.send(`Pong! \`${this.client.ws.ping}ms\``, { replyTo: message.id });
		// Zentreax was here :) (This comment exists to have more changes to test the spacing)
	}
}
