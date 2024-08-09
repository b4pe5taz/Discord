const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1259357427703480391')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/b4pe5taz') //Must be a youtube video link 
    .setState('x_-')
    .setName('-')
    .setDetails('##')


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1219432596593840148/1271146970786037923/IMG_6786.png?ex=66b6475e&is=66b4f5de&hm=70475a2606c3bfc02b63452610dd0d875695490153d4e1860838a818dbb22ca9&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('##') //Text when you hover the Large image
    .addButton('.', 'https://pin.it/1fSU6Gkx6');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `x_x`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

 const mySecret = process.env['TOKEN'];
client.login(mySecret); 
