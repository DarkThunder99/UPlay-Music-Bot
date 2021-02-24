module.exports = (client, message, track) => {
      message.channel.send({
        embed: {
          color: "00d9ff",
            description: `${client.emotes.naa} | Now playing ${track.title} into ${message.member.voice.channel.name} will Now play.`,
            footer: { text: `© UPlay 2020 | Requested by ${message.author.username}` },
        },
    });
};