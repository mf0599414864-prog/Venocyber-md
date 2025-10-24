//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2330505138607";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU085d3c0MUFmbHFwZHowZkpHVkR3UXdSdG1CejZKeUpoTFN1MjRTdmMwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUk9SQURSSEgzbkpYZGpYVmJPMHQ5Qkp3b3RFbjh3LzE2Z0FRWEJXNkN4UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTkFMUC9ERFhOd2xLbTdua1VCcmJFc2E4QjRObHFLcDBRaTlQcUZic2x3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuMVhscWN1cGFsMDV0Yk9hZk1KUzlNM3k5RWhWb3lMRjhDeHJRR0xQRFVBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNGbzNLemNmZTdJczFndnphTUsraVloMTY3NmZFN0wwdUpFamNOWVRzR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRYTnVDMnZZdy9FOU05OGpHL1NsOHFGZjdXZHdERFpoUGhPcHhUM2kwUTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT096OTJvanNoc3M3a09uYUF6TzhpV0w5MWZWUTFLa1IzYk9hR0tZY2lYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkR5SC9pT2hhaE1wbTd6eUlvVHNLREQvcExHemcxZ3lXTjYyRHhnektUbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhiT282NE9wV1QzdEJnQ0RJRjdJYzUvRVU1b1VyNWd4TlhPa2k4QTU2ZDV0aHVOcEtDQ0IzRWI5WjRZMmZDcktvVnBWV0UvdmNBalRxNlRFL09scmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6IncyenppYVRkcG5lQWhjTzNYV0lzTGVyTVJhZGxtUUtoV0xFUmR5UGVCZDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTA1MTM4NjA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RjcwMUY5MzcwQ0FFRjY4NzAzOUY3QzY5NDk4RjFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjEyNjU0NDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMzUwNTEzODYwN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUUzMzA4N0Y2NjJBQUE4QTZEOEJBMTQ4QzhFRTAyNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxMjY1NDQ2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2Q2JhX1FZRVRLNkZhSERDdURfU3NBIiwicGhvbmVJZCI6IjExMmFkNTU5LTllNDMtNGE1NC04ZDYyLTRkYzRmOGU1NDQ4MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUb2c2b3d6eko0NE1rSnNoRHFvSWFCazBRYjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm1WMlBOMS9UdjV6YUVwNWxQSGZNMUs1REN3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiIyMzM1MDUxMzg2MDc6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIZWxsbyIsImxpZCI6IjE4OTAyNTU0MzM4MzA6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00zNmtjZ0JFSmFPNjhjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImYyaHJITUt0dDN4RmpuTkdKL1BkbForR2hZZmxkMExsc3ZRQVNkMWM0MVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhYdUMxQXdLVWtTc1p4bE5VejlCSVlleW9XbWlTZjVaYm9Ycmp5c0pJYkM5S2gvMWdUL25lcGRMUFI2VjZzY0xkcjhuTit5ZWd2UjNoWEtITkhGMUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJZ2RGSXJTcnZwM2dNZXB6SGZmcFRBbWl0ZTh6L3RkNmpUdnR2NE1qakFGR1cwSGJYV2U0MWFwdDdiczJJOHBpK1QvZDlSRk5ZT2tqdi9jbXd0L1VoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzUwNTEzODYwNzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg5b2F4ekNyYmQ4Ulk1elJpZnozWldmaG9XSDVYZEM1YkwwQUVuZFhPTlUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTI2NTQ0NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHU1gifQ==
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
