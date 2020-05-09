const Moment = require('moment');
const Discord = require('discord.js');
const webhook_id = process.env.WEBHOOK_ID;
const webhook_token = process.env.WEBHOOK_TOKEN;
// 開始時間
const start_time = Moment().set({'hour': 21, 'minute': 0});

const hook = new Discord.WebhookClient(webhook_id, webhook_token);

const now = Moment()
const diff = start_time.diff(now, 'minute');

if (diff > 6) {
  hook.send(`@here\nあと${diff}ふ〜〜〜〜〜ん`);
}

else if (diff <= 5) {
  const msg = '@here\nチッチッチッチ🕕🕖🕘🕙🕛\nもうすぐ時間切れだよ😖💦\n早く来ないと、報酬なしだよ😱 😥';
  hook.send(msg);
}

hook.destroy();