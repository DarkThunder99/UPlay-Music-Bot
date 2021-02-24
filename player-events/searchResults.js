module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: "00d9ff",
            author: { name: `Here are your search results for ${query}` },
            footer: { text: `© UPlay 2020 | Requested by ${message.author.username}` },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};
