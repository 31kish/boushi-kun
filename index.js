const Moment = require('moment');
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.BOUSHI_TOKEN;

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}`);
});

client.on('message', message => {
  if (message.author.bot) return;

  if (message.mentions.has(client.user)) {
    const split_msg = message.cleanContent.split(' ');

    if (split_msg.length <= 1){
      message.channel.send('やぁぼく帽子');
      return;
    }

    const msg = split_msg[1];
    const arcana = parseArcana(msg);

    if (arcana === false) return;

    message.reply(`${msg}は${arcana}`);
  }
});

/**
 * アルカナの番号を返します
 * 
 * @param {string} メッセージ
 * @returns {int} アルカナに対応する番号
 */
function parseArcana(message) {
  const arcana_list = {
    '愚者': 0,
    '魔術師': 1,
    '女教皇': 2,
    '女帝': 3,
    '皇帝': 4,
    '教皇': 5,
    '恋人': 6,
    '戦車': 7,
    '力': 8,
    '隠者': 9,
  };

  console.log(message);

  if (message in arcana_list) {
    return arcana_list[message];
  }

  return false;
}

// login
client.login(token);