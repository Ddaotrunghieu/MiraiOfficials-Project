module.exports.config = {
    name: "info",
    version: "2.1.1",
    hasPermssion: 0,
    credits: "Hung Cho (Khánh Milo Fix) mod thêm by TrúcCute",
    description: "Xem thông tin thread/user",
    commandCategory: "bổ não",
    usages: "[thread/user]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "request": ""
    }
};

const totalPath = __dirname + '/cache/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");
const request = require("request");
const axios = require("axios");

module.exports.handleEvent = async ({ api, event, args }) => {
    if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
    let totalChat = JSON.parse(fs.readFileSync(totalPath));
    if (!totalChat[event.threadID]) return;
    if (Date.now() - totalChat[event.threadID].time > (_24hours * 2)) {
        let sl = (await api.getThreadInfo(event.threadID)).messageCount;
        totalChat[event.threadID] = {
            time: Date.now() - _24hours,
            count: sl,
            ytd: sl - totalChat[event.threadID].count
        }
        fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
    }
}

module.exports.run = async function({ api, event, args, Users, Threads }) {
    const { threadID, messageID, senderID, type, mentions, messageReply } = event;
    const moment = require("moment-timezone");
    const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
    if (args.length == 0) {
      return api.sendMessage(`Bạn có thể dùng\n==> ${global.config.PREFIX}${this.config.name} thread để xem thông tin box\n==> ${global.config.PREFIX}${this.config.name} user để xem thông tin người dùng`, threadID);
    }
    if (args[0] == "thread") {
        try {
            if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
            let totalChat = JSON.parse(fs.readFileSync(totalPath));
            let timeByMS = Date.now();
            var memLength = threadInfo.participantIDs.length;
            let threadMem = threadInfo.participantIDs.length;
            var nameMen = [];
            var gendernam = [];
            var gendernu = [];
            var nope = [];
            for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                var nName = threadInfo.userInfo[z].name;
                if (gioitinhone == "MALE") {
                    gendernam.push(z + gioitinhone)
                } else if (gioitinhone == "FEMALE") {
                  gendernu.push(gioitinhone)
                } else {
                    nope.push(nName)
                }
            };
            var { adminIDs } = await api.getThreadInfo(args[1] || threadID);
            var adminName = [];
            for (const arrayAdmin of adminIDs) {
          const name = await Users.getNameUser(arrayAdmin.id)
          adminName.push(name)
            }
            var nam = gendernam.length;
            var nu = gendernu.length;
            let qtv = threadInfo.adminIDs.length;
            let sl = threadInfo.messageCount;
            let u = threadInfo.nicknames;
            let icon = threadInfo.emoji;
            let threadName = threadInfo.threadName;
            let id = threadInfo.threadID;
            let sex = threadInfo.approvalMode;
            var pd = sex == false ? 'tắt' : sex == true ? 'bật' : 'kh';
            if (!totalChat[args[1] || threadID]) {
              totalChat[args[1] || threadID] = {
                    time: timeByMS,
                    count: sl,
                    ytd: 0
                }
              fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
            }
            let mdtt = Math.floor(Math.random() * 101);
            let preCount = totalChat[args[1] || threadID].count || 0;
            let ytd = totalChat[args[1] || threadID].ytd || 0;
            let hnay = (ytd != 0) ? (sl - preCount) : "chưa có thống kê";
            let hqua = (ytd != 0) ? ytd : "chưa có thống kê";
            if (timeByMS - totalChat[args[1] || threadID].time > _24hours) {
                if (timeByMS - totalChat[args[1] || threadID].time > (_24hours * 2)) {
                  totalChat[args[1] || threadID].count = sl;
                  totalChat[args[1] || threadID].time = timeByMS - _24hours;
                  totalChat[args[1] || threadID].ytd = sl - preCount;
                  fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
                }
                getHour = Math.ceil((timeByMS - totalChat[args[1] || event.threadID].time - _24hours) / 3600000);
                if (ytd == 0) mdtt = 100;
                else mdtt = ((((hnay) / ((hqua / 24) * getHour))) * 100).toFixed(0);
                mdtt += "%";
            }
            var callback = () =>
                api.sendMessage({
                        body: `⭐️Box: ${data3 || "không có"}\n🎮 ID: ${id}\n📱 Phê duyệt: ${pd}\n🐰 Emoji: ${icon || "👍"}\n📌 Thông tin: ${threadMem} thành viên\nSố tv nam 🧑‍🦰: ${nam} thành viên\nSố tv nữ 👩‍🦰: ${nu} thành viên\n🕵️‍♂️ QTV: ${adminName.join(', ')}\n💬 Tổng: ${sl} tin nhắn\n📈 Mức tương tác: ${mdtt}\n🌟 Tổng tin nhắn hôm qua: ${hqua}\n🌟 Tổng tin nhắn hôm nay: ${hnay}\n⠀⠀⠀ ⠀ ⠀ 『${gio}』`,
                        attachment: fs.createReadStream(__dirname + '/cache/1.png')
                    },
                    threadID,
                    () => fs.unlinkSync(__dirname + '/cache/1.png'),
                    messageID
                );
            return request(encodeURI(`${threadInfo.imageSrc}`))
              .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
                .on('close', () => callback());
        } catch (e) {
            return (
              console.log(e),
              api.sendMessage(`Không thể lấy thông tin nhóm của bạn!\n${e}`, threadID, messageID)
            )
        }
    }
    if (args[0] == "user") {
        try {
            if (type == "message_reply") {
                uid = messageReply.senderID
            } else if (args.join().indexOf('@') !== -1) {
                var uid = Object.keys(mentions)[0]
            } else {
                var uid = senderID
            }
            let data = await api.getUserInfo(uid),
                { profileUrl, gender, isFriend } = data[uid];
            let name = await Users.getNameUser(uid)
            var callback = () => 
              api.sendMessage({
                body:
                    `💦Tên: ` + name +
                    `\n🐧UID: ` + uid +
                    `\n🙆‍♀️Trạng thái: ` + (isFriend == true ? "đã kết bạn với bot" : isFriend == false ? "chưa kết bạn với bot" : "UNKOWN") +
                    `\n🦋Giới tính: ` + (gender == 2 ? 'nam' : gender == 1 ? 'nữ' : 'UNKNOWN') +
                    `\n🏝Profile:\n` + profileUrl,
                attachment: fs.createReadStream(__dirname + "/cache/1.png")
            }, threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), messageID);
            return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=750&width=750&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
        } catch (e) {
            return (
              console.log(e),
              api.sendMessage(`Không thể lấy thông tin người dùng!\n${e}`, threadID, messageID)
            )
        }
    }
  }
