const { Intents } = require("discord.js");

const config = {
  bot: {
    token: process.env.DISCORD_TOKEN || "OTU0MTkzMzI2NzA0MzE2NDM2.YjPjyQ.QwvNoUkfbnBhFPaPcNg7_Ncx1J8",
    intents: [], // You can find the available intents on https://discord.js.org/#/docs/main/stable/class/Intents?scrollTo=s-FLAGS
    guildId: "942465962945441912", // Update this field to only register commands a guild, this will make the commands to load instantly in the selected gulld (Optional)
  },
};

module.exports = config;