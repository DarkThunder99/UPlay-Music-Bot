module.exports = (client, message, playlist) => {
    message.channel.send({
      embed: {
        color: "00d9ff",
        description: `${client.emotes.naa} | ${playlist.title} has been added to the queue (**${playlist.items.length}** songs) !`}});
};