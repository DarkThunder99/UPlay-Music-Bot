const emotes = require("../config/emojis.json");
const filters = require("../config/filters.json");

exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${emotes.error}`);
    if (!client.player.getQueue(message)) return message.channel.send(`No songs currently playing ${emotes.error}`);
    const filter = args[0];
    if (!filter) return message.channel.send(`Please specify a valid filter to enable or disable ${emotes.error}`);
    const filterToUpdate = Object.values(filters).find((f) => f.toLowerCase() === filter.toLowerCase());
    if (!filterToUpdate) return message.channel.send(`This filter doesn't exist ${emotes.error}`);
    const filterRealName = Object.keys(filters).find((f) => filters[f] === filterToUpdate);

    const queueFilters = client.player.getQueue(message).filters
    const filtersUpdated = {};
    filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
    client.player.setFilters(message, filtersUpdated);

    if (filtersUpdated[filterRealName]) message.channel.send({
      embed: {
        color: "00d9ff",
        description: `${emotes.naa} | I'm **Adding** the Filter to the Music, Please wait... **Note:** the longer the music is, the longer this will take `}});
    else message.channel.send({
    embed: {
      color: "0800ff",
      description: `${emotes.naa} | I'm **Disabling** the Filter to the Music, Please wait... **Note:** the longer the music is, the longer this will take`}});

};
