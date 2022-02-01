const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();


client.once('ready', () => {
    console.log(`Bot is Online`);
    client.on("ready", () => {

        console.log(`${client.user.tag} is ready`);
    
        function chNickname() {
            const targetguild = client.guilds.cache.get("908109644516446249")
            const me = targetguild.members.cache.get(client.user.id)
            let name = ["Diamond Cheats"]
            for(let i = 0; i < name.length; i++ )
            me.setNickname(name[i])
        }; setInterval(chNickname, 10000)
    });
    
});
client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("920581020384919557")
    if (welcomeChannel) {

        let welcomeEmbed = new discord.MessageEmbed()
        if (member.user) {

            if (member.user.client) {

                welcomeEmbed.setColor(colors.Skyblue)
                welcomeEmbed.setAuthor('Diamond Cheats', 'https://media.discordapp.net/attachments/886887492110942238/916669614321205278/20211204_135932_0000.png')
                welcomeEmbed.setDescription(` سلام  <@${member.user.id}> Sahlam chtori?Khosh begzare gol `)
                welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
                welcomeEmbed.setFooter(' Diamond Cheats  ', 'https://media.discordapp.net/attachments/886887492110942238/916669614321205278/20211204_135932_0000.png');
                welcomeChannel.send(welcomeEmbed)
            }
        }
    } else {
        console.log("Welcome Channel Yaft Nashod")
    }
})

console.log('
██████╗░██╗░█████╗░███╗░░░███╗░█████╗░███╗░░██╗██████╗░  ░█████╗░██╗░░██╗███████╗░█████╗░████████╗░██████╗
██╔══██╗██║██╔══██╗████╗░████║██╔══██╗████╗░██║██╔══██╗  ██╔══██╗██║░░██║██╔════╝██╔══██╗╚══██╔══╝██╔════╝
██║░░██║██║███████║██╔████╔██║██║░░██║██╔██╗██║██║░░██║  ██║░░╚═╝███████║█████╗░░███████║░░░██║░░░╚█████╗░
██║░░██║██║██╔══██║██║╚██╔╝██║██║░░██║██║╚████║██║░░██║  ██║░░██╗██╔══██║██╔══╝░░██╔══██║░░░██║░░░░╚═══██╗
██████╔╝██║██║░░██║██║░╚═╝░██║╚█████╔╝██║░╚███║██████╔╝  ╚█████╔╝██║░░██║███████╗██║░░██║░░░██║░░░██████╔╝
╚═════╝░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░╚════╝░╚═╝░░╚══╝╚═════╝░  ░╚════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚═════╝░
																	 `);

// <---------------------->
client.login(botconfig.token);