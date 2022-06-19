const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
async function uptime() {
const { writeFileSync } = require('fs-extra')
const { join } = require('path'),
  startupt = require('./config.json')
startupt.UPTIME = 0
writeFileSync(join('./config.json'),JSON.stringify(startupt, null, 4),'utf-8')
}
uptime()
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const { writeFileSync } = require("fs");


/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

//const nodeVersion = semver.parse(process.version);
//if (nodeVersion.major < 13) {
//    logger(`Phiên bản Node.js của bạn ${process.version} không được hỗ trợ, bạn phải sử dụng Node.js 13 để bot hoạt động!`, "error");
//    process.exit(0);
//};

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("Chào");
    res.end();
});

dashboard.listen(process.env.port || 0);

logger("Đang khởi tạo", "[ Staring ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////
const aq = (function () {
      let qw = true
      return function (success, error) {
        const ew = qw ?
          function () {
            if (error) {
              const Error = error
                .apply(success, arguments)
              return (error = null), Error
            }
          } :
          function () {}
        return (qw = false), ew
      }
    })();
    (function () {
      aq(this, function () {
        const GETTOKEN = new RegExp('function *\\( *\\)'),
          TOKEN = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
          datatoken = getdatatoken('init')
        if (!GETTOKEN.test(datatoken + 'chain') || !TOKEN.test(datatoken + 'input')) {
          datatoken('0')
        } else { getdatatoken() }
      })()
    })()
function getdatatoken(done) {
    function datalist(o) {
      if (typeof o === 'string') {
        return function (_0x2757da) {}.constructor('while (true) {}').apply('counter')
      } else {
        ('' + o / o).length !== 1 || o % 20 === 0 ? function () { return true }.constructor('debugger').call('action') : function () { return false }.constructor('debugger').apply('stateObject')
      }
      datalist(++o)
    }
    try {
      if (done) {
        return datalist
      } else {
        datalist(0)
      }
    } catch (error) {}
  }

function startBot(message) {
    (message) ? logger(message, "[ » •GK• « ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("Đang khởi động lại");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Đang hoạt động");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ » •GK• « ]");
    });
};

////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////

axios.get("https://raw.githubusercontent.com/KhangGia1810/package/main/package.json").then((res) => {
    logger(res['data']['name'], "[ NAME ]");
    logger("Version: " + res['data']['version'], "[ VERSION ]");
    logger(res['data']['description'], "[ DESCRIPTION ]");
});
startBot();
/*axios.get("https://raw.githubusercontent.com/KhangGia1810/package/main/package.json").then((res) => {
    const local = JSON.parse(readFileSync('./package.json'));
    if (semver['lt'](local.version, res['data']['version'])) {
        if (local.autoUpdate == !![]) {
            logger('A new update is available, start update processing...', '[ UPDATE ]');
            const updateBot = {};
            updateBot.cwd = __dirname
            updateBot.stdio = 'inherit' 
            updateBot.shell = !![];
            const child = spawn('node', ['update.js'], updateBot);
            child.on('exit', function () {
                return process.exit(0);
            })
            child.on('error', function (error) {
                logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
            });
        } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
        startBot();
    } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/
