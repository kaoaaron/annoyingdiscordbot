const Discord = require('discord.js')

const client = new Discord.Client()

client.once('ready', () => {
    console.log('Ready!')
})

client.on('voiceStateUpdate', (oldMember, newMember) => {

        const channel = client.channels.cache.get('492105859027959841');

        MemberCount = channel.members.size;

        if(MemberCount <= 1){
            channel.leave();
            return
        }
    
        if (!channel){
            return console.error("The channel does not exist!");
        }

        channel.join().then(connection => {
        console.log("connected");
        client.on('guildMemberSpeaking', (speaking) => {
            if (speaking) {
                connection.play('./laugh.mp3');    
            }
        });
        }).catch(e => {
        console.error(e);
        });
    
  });


client.login('ODYyMDIyMTA5OTk1NzI4OTA2.YOSSpg.-kXGLfHEZiHtfsbZy5jnV17fEpA')