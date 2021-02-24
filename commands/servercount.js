const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {
	message.channel.send({
		embed: {
	title: "Server Count",
	description: (`I'm in **${client.guilds.cache.size}** Server`)}})
};
