module.exports = (client, message, query, tracks, content, collector) => {
    message.channel.send({
      embed: {
        color: "0800ff",
        description:`${client.emotes.error} | You must send a valid number between **1** and **${tracks.length}**!`}});
};