const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {
    if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${emotes.error}`);
    if (!client.player.getQueue(message)) return message.channel.send(`No music playing on this server ${emotes.error}`);
    client.player.shuffle(message);
      return message.channel.send({
        embed: {
          color: "00d9ff",
            description: `${emotes.success} Queue shuffled **${client.player.getQueue(message).tracks.length}** song(s)`,
        },
    });
};
