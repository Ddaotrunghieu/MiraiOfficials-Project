module.exports.config = {
    name: "tile",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Jukie~",
    description: "Xem tỉ lệ hợp đôi giữa 2 người",
    commandCategory: "Tình yêu",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

  module.exports.run = async function({ api, args, Users, event}) {
  const axios=global["nodemodule"]["axios"];
  const request=global["nodemodule"]["request"];
  const fs=global["nodemodule"]["fs-extra"];
  var mention=Object["keys"](event["mentions"])[0];

  if(!mention){return api["sendMessage"]("𝐂𝐚̂̀𝐧 𝐩𝐡𝐚̉𝐢 𝐭𝐚𝐠 𝟏 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐭𝐢̉ 𝐥𝐞̣̂ 𝐡𝐨̛̣𝐩 𝐧𝐡𝐚𝐮",event["threadID"])};
  var name=( await Users["getData"](mention))["name"];
  var namee=( await Users["getData"](event["senderID"]))["name"];
  var tle=Math["floor"](Math["random"]()* 101);
  var arraytag=[];arraytag["push"]({id:mention,tag:name});arraytag["push"]({id:event["senderID"],tag:namee});
  var mentions=Object["keys"](event["mentions"]);

  let Avatar=( await axios["get"](`${"https://graph.facebook.com/"}${mentions}${"/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"}`,{responseType:"arraybuffer"}))["data"];
  fs["writeFileSync"](__dirname+ "/cache/avt.png",Buffer["from"](Avatar,"utf-8"));

  let Avatar2=( await axios["get"](`${"https://graph.facebook.com/"}${event["senderID"]}${"/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"}`,{responseType:"arraybuffer"}))["data"];

  fs["writeFileSync"](__dirname+ "/cache/avt2.png",Buffer["from"](Avatar2,"utf-8"));
  
  var imglove=[];imglove["push"](fs["createReadStream"](__dirname+ "/cache/avt2.png"));
  imglove["push"](fs["createReadStream"](__dirname+ "/cache/avt.png"));
  var msg={body:`${"💟===💟𝐓𝐢̉ 𝐥𝐞̣̂ 𝐡𝐨̛̣𝐩 𝐧𝐡𝐚𝐮💟===💟"}\n${namee}${" <3 "}${name}\n${"𝐋𝐚̀: "}${tle}${"% "}`,mentions:arraytag,attachment:imglove};
  return api["sendMessage"](msg,event["threadID"],event["messageID"])
        }
