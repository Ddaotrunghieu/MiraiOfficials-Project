const fs = require("fs");
module.exports.config = {
	name: "12thi",
  version: "1.2.8",
	hasPermssion: 0,
	credits: "TuanDzz", // mod by Nguyen
	description: "Xem thông tin về 12 thì tiếng anh",
	commandCategory: "Tiện Ích",
	usages: "12 thì tiếng anh",
        cooldowns: 5,
        dependencies: {
             "axios": "",
             "fs-extra": "",
             "request": ""
  }
}

module.exports.onLoad = () => {
  const request = require("request");
  const dirMaterial = __dirname + `/noprefix/12thi/`; 
  if (!fs.existsSync(dirMaterial + "noprefix" + "12thi")) fs.mkdirSync(dirMaterial, { recursive: true }); 
  
  if (!fs.existsSync(dirMaterial + "1.png")) request("https://i.imgur.com/65pq3xy.png").pipe(fs.createWriteStream(dirMaterial + "1.png"));
  
  if (!fs.existsSync(dirMaterial + "2.jpg")) request("https://i.imgur.com/y9jnojb.jpg").pipe(fs.createWriteStream(dirMaterial + "2.jpg"));
  
  if (!fs.existsSync(dirMaterial + "3.png")) request("https://i.imgur.com/7arOdiW.png").pipe(fs.createWriteStream(dirMaterial + "3.png"));
  
  if (!fs.existsSync(dirMaterial + "4.png")) request("https://i.imgur.com/qYUKk4b.png").pipe(fs.createWriteStream(dirMaterial + "4.png"));
  
  if (!fs.existsSync(dirMaterial + "5.png")) request("https://i.imgur.com/dufsDoX.png").pipe(fs.createWriteStream(dirMaterial + "5.png"));
  
  if (!fs.existsSync(dirMaterial + "6.png")) request("https://i.imgur.com/Q9QxaGh.png").pipe(fs.createWriteStream(dirMaterial + "6.png"));
  
  if (!fs.existsSync(dirMaterial + "9.png")) request("https://i.imgur.com/HT3OD4L.png").pipe(fs.createWriteStream(dirMaterial + "9.png"));
  
  if (!fs.existsSync(dirMaterial + "7.png")) request("https://i.imgur.com/nUONWQz.png").pipe(fs.createWriteStream(dirMaterial + "7.png"));
  
  if (!fs.existsSync(dirMaterial + "8.jpg")) request("https://i.imgur.com/n4RyhD8.jpg").pipe(fs.createWriteStream(dirMaterial + "8.jpg"));
  
  if (!fs.existsSync(dirMaterial + "10.jpg")) request("https://i.imgur.com/wEQPhy0.jpg").pipe(fs.createWriteStream(dirMaterial + "10.jpg"));

  if (!fs.existsSync(dirMaterial + "11.png")) request("https://i.imgur.com/6i1PXMn.png").pipe(fs.createWriteStream(dirMaterial + "11.png"));

  if (!fs.existsSync(dirMaterial + "12.jpg")) request("https://i.imgur.com/0yWpf9J.jpg").pipe(fs.createWriteStream(dirMaterial + "12.jpg"));
  
}

module.exports.handleReply = async ({ api, event, handleReply }) => {
const { threadID, messageID, senderID } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(event.body) {

					case "1":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Thì hiện tại đơn là một thì trong tiếng Anh hiện đại. Thì này diễn tả một hành động chung chung, tổng quát lặp đi lặp lại nhiều lần hoặc một sự thật hiển nhiên hoặc một hành động diễn ra trong thời gian hiện tại. ", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12thi/1.png`)
			}, event.threadID, event.messageID);
			break;
		case "2":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Định nghĩa thì hiện tại tiếp diễn là thì được dùng để diễn tả những sự việc/hành động xảy ra ngay lúc chúng ta nói hoặc xung quanh thời điểm nói, và hành động/sự việc đó vẫn chưa chấm dứt (còn tiếp tục diễn ra) trong thời điểm nói.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12thi/2.jpg`)
			}, event.threadID, event.messageID);
			break;
		case "3":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Thì hiện tại hoàn thành là thì sử dụng để diễn tả một hành động đã hoàn thành cho tới thời điểm hiện ...", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12thi/3.png`)
			}, event.threadID, event.messageID); 
			break;
		case "4":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Thì hiện tại hoàn thành tiếp diễn (thì Present perfect continuous) là thì diễn tả sự việc bắt đầu trong quá khứ và tiếp tục ở hiện tại có thể tiếp diễn ở tương lai sự việc đã kết thúc nhưng ảnh hưởng kết quả còn lưu lại hiện tại.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12thi/4.png`)
			}, event.threadID, event.messageID); 
			break;
		case "5":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Thì quá khứ đơn (Past simple tense) dùng để diễn tả một hành động, sự việc diễn ra và kết thúc trong quá khứ. Ví dụ: We went shopping yesterday. (Ngày hôm qua chúng tôi đã đi mua sắm).", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12thi/5.png`)
			}, event.threadID, event.messageID); 
			break;
		case "6":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Thì quá khứ tiếp diễn (Past Continuous tense) là thì được dùng khi muốn nhấn mạnh diễn biến hay quá trình của sự vật hay sự việc hoăc thời gian sự vật hay sự việc đó diễn ra và đây là thì tiếng Anh mà nhiều bạn nhầm lẫn nhất.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12thi/6.png`)
			}, event.threadID, event.messageID); 
			break;
		case "7":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Thì quá khứ hoàn thành dùng để diễn tả một hành động xảy ra trước một hành động khác và cả hai hành động này đều đã xảy ra trong quá khứ. Hành động nào xảy ra trước thì dùng thì quá khứ hoàn thành, hành động xảy ra sau thì dùng thì quá khứ đơn.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12thi/7.png`)
			}, event.threadID, event.messageID); 
			break;
		case "8":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Thì quá khứ hoàn thành tiếp diễn (Past Perfect Continuous) là thì dùng để diễn tả một hành động đã và đang xảy ra trong quá khứ nhưng kết thúc trước một hành động khác, hành động đó cũng kết thúc trong quá khứ. Quá khứ hoàn thành tiếp diễn mô tả tính chính xác của các hành động đã xảy ra.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12thi/8.jpg`)
			}, event.threadID, event.messageID); 
			break;
    case "9":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Thì tương lai đơn trong tiếng Anh (Simple future tense) được dùng khi không có kế hoạch hay quyết định làm gì nào trước khi chúng ta nói. Chúng ta ra quyết định tự phát tại thời điểm nói.", attachment: fs.createReadStream(__dirname + `/noprefix/12thi/9.png`)
			}, event.threadID, event.messageID); 
			break;
    case "10":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Thì tương lai tiếp diễn (Future continuous tense) dùng để diễn tả một hành động, sự việc sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.", attachment: fs.createReadStream(__dirname + `/noprefix/12thi/10.jpg`)
			}, event.threadID, event.messageID); 
						break;
      case "11":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Tương lai hoàn thành là gì? Thì tương lai hoàn thành (Future perfect tense) dùng để diễn tả một hành động, sự việc sẽ hoàn thành tới một thời điểm cụ thể trong tương lai.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12thi/11.png`)
			}, event.threadID, event.messageID); 
			break;
      case "12":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "Thì tương lai hoàn thành tiếp diễn (Future Perfect Continuous) là thì dùng để nhấn mạnh khoảng thời gian của một hành động, sự việc đang diễn ra trong tương lai và sẽ kết thúc trước một hành động, sự việc khác.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12thi/12.jpg`)
			}, event.threadID, event.messageID); 
			      break;
					default:
				const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("💟 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 12 || choose < 1) return api.sendMessage("🔰 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
		    
			}
		}
	}
}

module.exports.run = async ({ api, event, handleReply }) => {
	return api.sendMessage({ body: "📚 𝟏𝟐 𝐓𝐡𝐢̀ 𝐓𝐫𝐨𝐧𝐠 𝐓𝐢𝐞̂́𝐧𝐠 𝐀𝐧𝐡 📚" +
                "\n\n𝟏. 𝐓𝐡𝐞 𝐏𝐫𝐞𝐬𝐞𝐧𝐭 𝐒𝐢𝐦𝐩𝐥𝐞 (𝐓𝐡𝐢̀ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 Đ𝐨̛𝐧) 📓\n" +
                "𝟐. 𝐓𝐡𝐞 𝐏𝐫𝐞𝐬𝐞𝐧𝐭 𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐨𝐮𝐬(𝐓𝐡𝐢̀ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐓𝐢𝐞̂́𝐩 𝐃𝐢𝐞̂̃𝐧) 📔\n" +
                "𝟑. 𝐓𝐡𝐞 𝐏𝐫𝐞𝐬𝐞𝐧𝐭 𝐏𝐞𝐫𝐟𝐞𝐜𝐭 (𝐓𝐡𝐢̀ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐇𝐨𝐚̀𝐧 𝐓𝐡𝐚̀𝐧𝐡) 📒\n" +
                "𝟒. 𝐓𝐡𝐞 𝐏𝐫𝐞𝐬𝐞𝐧𝐭 𝐏𝐞𝐫𝐟𝐞𝐜𝐭 𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐨𝐮𝐬 (𝐓𝐡𝐢̀ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐇𝐨𝐚̀𝐧 𝐓𝐡𝐚̀𝐧𝐡 𝐓𝐢𝐞̂́𝐩 𝐃𝐢𝐞̂̃𝐧) 📕\n" +
                "𝟓. 𝐓𝐡𝐞 𝐒𝐢𝐦𝐩𝐥𝐞 𝐏𝐚𝐬𝐭 (𝐓𝐡𝐢̀ 𝐐𝐮𝐚́ 𝐊𝐡𝐮̛́ Đ𝐨̛𝐧) 📗\n" +
                "𝟔. 𝐓𝐡𝐞 𝐏𝐚𝐬𝐭 𝐂𝐨𝐧𝐭𝐢𝐧𝐨𝐮𝐬 (𝐓𝐡𝐢̀  𝐐𝐮𝐚́ 𝐊𝐡𝐮̛́ 𝐓𝐢𝐞̂́𝐩 𝐃𝐢𝐞̂̃𝐧) 📘\n" +
                "𝟕. 𝐓𝐡𝐞 𝐏𝐚𝐬𝐭 𝐏𝐞𝐫𝐟𝐞𝐜𝐭 (𝐓𝐡𝐢̀ 𝐐𝐮𝐚́ 𝐊𝐡𝐮̛́ 𝐇𝐨𝐚̀𝐧 𝐓𝐡𝐚̀𝐧𝐡) 📙\n" +
                "𝟖. 𝐓𝐡𝐞 𝐏𝐚𝐬𝐭 𝐏𝐞𝐫𝐟𝐞𝐜𝐭 𝐂𝐨𝐧𝐭𝐢𝐧𝐨𝐮𝐬 (𝐓𝐡𝐢̀ 𝐐𝐮𝐚́ 𝐊𝐡𝐮̛́ 𝐇𝐨𝐚̀𝐧 𝐓𝐡𝐚̀𝐧𝐡 𝐓𝐢𝐞̂́𝐩 𝐃𝐢𝐞̂̃𝐧) 📚\n" +
                "𝟗. 𝐓𝐡𝐞 𝐒𝐢𝐦𝐩𝐥𝐞 𝐅𝐮𝐭𝐮𝐫𝐞 – (𝐓𝐡𝐢̀ 𝐓𝐮̛𝐨̛𝐧𝐠 𝐋𝐚𝐢 Đ𝐨̛𝐧) 📖\n" +
                "𝟏𝟎. 𝐓𝐡𝐞 𝐅𝐮𝐭𝐮𝐫𝐞 𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐨𝐮𝐬 (𝐓𝐡𝐢̀ 𝐓𝐮̛𝐨̛𝐧𝐠 𝐋𝐚𝐢 𝐓𝐢𝐞̂́𝐩 𝐃𝐢𝐞̂̃𝐧) 📝\n" +
                "𝟏𝟏. 𝐓𝐡𝐞 𝐅𝐮𝐭𝐮𝐫𝐞 𝐏𝐞𝐫𝐟𝐞𝐜𝐭 ( 𝐓𝐡𝐢̀ 𝐓𝐮̛𝐨̛𝐧𝐠 𝐋𝐚𝐢 𝐇𝐨𝐚̀𝐧 𝐓𝐡𝐚̀𝐧𝐡) 📰\n" +
                "𝟏𝟐. 𝐓𝐡𝐞 𝐅𝐮𝐭𝐮𝐫𝐞 𝐏𝐞𝐫𝐟𝐞𝐜𝐭 𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐨𝐮𝐬 (𝐓𝐡𝐢̀ 𝐓𝐮̛𝐨̛𝐧𝐠 𝐋𝐚𝐢 𝐇𝐨𝐚̀𝐧 𝐓𝐡𝐚̀𝐧𝐡 𝐓𝐢𝐞̂́𝐩 𝐃𝐢𝐞̂̃𝐧) 🗞" + 
                "\n\n📚 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐭𝐡𝐞̂𝐦 𝐯𝐞̂̀ 𝐭𝐮̛̀𝐧𝐠 𝐭𝐡𝐢̀ 𝐧𝐡𝐚"
            }, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
    })
  }
