module.exports = (client, message, queue, track) => {
            message.channel.send({
        embed: {
          color: '00d9ff',
            description: `${client.emotes.naa} | ${track.title} has been added to the queue !`,
            footer: { text: `© UPlay 2020 | Requested by ${message.author.username}` },
        },
    });
};