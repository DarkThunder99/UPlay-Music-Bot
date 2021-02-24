module.exports = (client, message, queue) => {
    message.channel.send({
      embed: {
        color: "0800ff",
        description: `${client.emotes.na} | Music stopped as there is no more member in the voice channel !`}});

};