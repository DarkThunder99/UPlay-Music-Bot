const config = require("../config/bot.json");

module.exports = async (client) => {
    console.log(`[API] Connected to the Bot`);
    client.user.setActivity(config.game)

};
