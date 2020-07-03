const Discord = require("discord.js");
const config = require("./config.json");
const snoowrap = require('snoowrap');
const bot = new Discord.Client();

var pastas = []

var faces = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^"];

function owoify(text) {
  var v = text;

  v = v.replace(/(?:r|l)/g, "w");
  v = v.replace(/(?:R|L)/g, "W");
  v = v.replace(/n([aeiou])/g, "ny$1");
  v = v.replace(/N([aeiou])/g, "Ny$1");
  v = v.replace(/N([AEIOU])/g, "Ny$1");
  v = v.replace(/ove/g, "uv");

  var exclamationPointCount = 0;
  var i;
  var stringsearch = "!";
  //for loop counts the # of individual exclamation points
  for (var i = 0; i < v.length; i++) {
    stringsearch === v[exclamationPointCount++];
  }
  for (i = 0; i < exclamationPointCount; i++) {
    v = v.replace(
      "!",
      " " + faces[Math.floor(Math.random() * faces.length)] + " "
    );
  }
  return v;
}

bot.once("ready", () => {
  console.log("Ready!");
});

bot.on("message", (message) => {
  var prefixes = ["!owo", "!owotts", "!owowify", "!newpasta", "!pasta", "!owopasta"];
  const c = message.content;
  const prefix = c.split(" ")[0];
  console.log(prefix)
  if (prefix === prefixes[0]) {
    message.channel.send(owoify(c.substring(prefixes[0].length)));
  }
  else if (prefix === prefixes[1]) {
    message.channel.send(owoify(c.substring(prefixes[1].length)), { tts: true });
  }
  // else if (prefix === prefixes[2]) {
  //   console.log("owowifying");
  //   const r = new snoowrap({
  //     userAgent: "-epjB9ZrNtwxu5o3ICmX07PORqU0"
  //   });
  //   r.getSubreddit("copypasta").fetch().then(userInfo => {
  //     console.log(userInfo);
  //   })
  // }
  // else if (prefix === prefixes[3]) {
  //   var pasta = c.substring(prefixes[3].length)
  //   pastas.push(pasta)
  //   message.channel.send("Your pasta has been added with id " + pastas.length - 1 + ". Use !pasta " + pastas.length - 1 + " to use it")
  // }
  // else if (prefix === prefixes[4]) {
  //   var id = parseInt(c.substring(prefixes[4].length))
  //   message.channel.send(pastas[id])
  // }
  // else if (prefix === prefixes[5]) {
  //   var id = parseInt(c.substring(prefixes[4].length))
  //   message.channel.send(owoify(pastas[id]))
  // }
});

bot.login(config.token);
