module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "cc",
    description: "",
    commandCategory: "Game",
    usages: "[reply]",
    cooldowns: 5,
    dependencies: {
  "axios": "",
    }
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if(!linkanh) return api.sendMessage('𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐑𝐞𝐩𝐥𝐲 𝐇𝐨𝐚̣̆𝐜 𝐍𝐡𝐚̣̂𝐩 𝐋𝐢𝐧𝐤 𝟏 𝐇𝐢̀𝐧𝐡 𝐀̉𝐧𝐡!!!', event.threadID, event.messageID)
const res = await axios.get(`https://api-12.chinhle4447.repl.co/imgur?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
    return api.sendMessage(`${img}`, event.threadID, event.messageID);
    
}
