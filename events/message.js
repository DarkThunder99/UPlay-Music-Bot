const config = require("../config/bot.json");

module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const commandd = client.commands.get(command);
    if (!commandd) return;
    commandd.run(client, message, args);

};
