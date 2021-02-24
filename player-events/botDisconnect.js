module.exports = (client, message, queue) => {
    message.channel.send({
      embed: {
        color: "0800ff",
        description: `${client.emotes.na} | Music stopped as i have been disconnected from the channel !`}});

};
