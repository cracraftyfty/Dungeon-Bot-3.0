const Discord = require("discord.js");

exports.run = (args, message, bot, cmds) => {
    let commands = bot.commands;
    if (args[0]) {
        let d1 = [args[0], args[1]];
        let dname = d1.join('');
        if (dname == 'dt' || dname == 'deserttemple') commands.get('dt').execute(message, bot); 
        else if (dname == 'wo' || dname == 'winteroutpost') commands.get('wo').execute(message, bot);
        else if (dname == 'pi' || dname == 'pirateisland') commands.get('pi').execute(message, bot);
        else if (dname == 'kc' || dname == 'kingscastle') commands.get('kc').execute(message, bot);
        else if (dname == 'tu' || dname == 'theunderworld') commands.get('tu').execute(message, bot);
        else if (dname == 'sp' || dname == 'samuraipalace') commands.get('sp').execute(message, bot);
        else if (dname == 'tc' || dname == 'thecanals') commands.get('tc').execute(message, bot);
        else if (dname == 'gh' || dname == 'ghastlyharbor') commands.get('gh').execute(message, bot);
        else if (dname == 'ss' || dname == 'steampunksewers') commands.get('ss').execute(message, bot);
        else if (dname == 'br' || dname == 'bossraids') commands.get('br').execute(message, bot);
        else {
            let error1 = new Discord.RichEmbed()
                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                .setDescription(`**:x: Error :x:**\n\nCannot find ${args[0]} Dungeon in the Database.\nPlease enter valid dungeon`)
                .setFooter("Dungeon Quest • Error")
                .setColor(bot.colors.red_dark)
                .setTimestamp();
            return message.channel.send(error1);
        };
    } else {
        let error0 = new Discord.RichEmbed()
            .setColor(bot.colors.red_dark)
            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
            .setDescription(`:x: **Error** :x:\n\n**Expected usage:**\n-> ${bot.config.prefix}xp [dungeon name]`)
            .setTimestamp()
            .setFooter("Dungeon Quest • Error")
        return message.channel.send(error0);
    };
};