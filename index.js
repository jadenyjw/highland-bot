const Discord = require('discord.js');
const client = new Discord.Client();
var cron = require('node-cron');


client.on('ready', () => {
  client.user.setGame('/hh');
  cron.schedule('0 10 * * *', function(){
    postHall();
  });
  cron.schedule('0 20 * * *', function(){
    postHall();
  });
})

client.on('message', message => {

  data = message.content;
  if(data == "/hh"){
    message.channel.send(new Date().toLocaleString(), {
      file: "http://www.ucitonline.com/uofthighlandhall/images/image1.jpg" // Or replace with FileOptions object
  });
  }
});

client.login(process.env.HIGHLAND_TOKEN);

function postHall(){

  for (let [i, guild] of client.guilds){
    for (let [j, channel] of guild.channels){
      if(channel.name == "highland-hall-progress"){
        channel.send(new Date().toLocaleString(), {
          file: "http://www.ucitonline.com/uofthighlandhall/images/image1.jpg" // Or replace with FileOptions object
      });
      }
    }
  }
}
