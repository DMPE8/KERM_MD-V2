//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "+242055359733";
global.owner = process.env.OWNER_NUMBER || "+242055359733";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1RaTNuYjZDY0IvVXpvQ2xYQ205Q2EzTTRXT1UrbThWR2FQenIyM1luWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmpYOGpjVkVVMHVFNzRRQzhlZ2IrTFk4c1dJeGxsTmx1eFdOL01mRUV3MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTFcyTlF1WkVsMjk5T0QvMEV2ckIrWE0vcnE2cmVEZlNBNEZYWERGU0ZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJab0d1M2FPRUtuUENRY3JyVTdHQjNXT3h4WEhYZ1VGM3FQWHZ4cXVEbXhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVPemovZEgxVGV2UEpQL3BZNjV1Um5XKzBGN0JManZ6UnM0NGdRTkphM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhmTjNRbXdYRmREODMwYmp6bUM0RmErOGRBQmZLQS94OU9ReFlPb3MweVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUd2VUZteXBOTWUxWTFPMHMvZ3dXVzArYXJsZnlVRWVyVzlBU3ZhS1cxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0NzUEVyenlwN0NTcWNnOVp4U3U4SHNlaTR0SThQZUxIc0FzRmQyR3pUYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkloRzUxR2xLdUxoLytrS0VPSmNBaUl3MkVyanpMTFdNaSttajdvMS9PQTlwc0VTZWhUK3N0R2V6aGxUOS9rbDE2Q3ZBK1BvaXRaMGQyS3d6Y2pEcEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiI0cHppMnloUmdkb29hNFN5ZlI5NC9mZmtvR0Uxc1BRdk5ZR0FiQ1BpZnhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5ZmNiT1BMQlI0ZXMtLUVZTjhNU3JBIiwicGhvbmVJZCI6IjI2MDA3MDg2LTdjZTktNDNhZS05MWU5LWI1MzMxZmJhYTI3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQYTd2OWE4RUtzbkI1a1BBUHBDN1Y1bzdFc2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibldYTkRzTjE3ZGVla2EzSWRIV3I1SkdTN25JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRYVEoxTFI2IiwibWUiOnsiaWQiOiIyNDIwNTUzNTk3MzM6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4L+Q8Jakk/Cdm63wnZGF8JOCgPCdm7LwnZGM8J2Rh/Cdm6jwnZul8J2QuvCdm6nwnZGF8J2br/CWpJPgv5AifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lUYm1QUUVFT1RiOHJjR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlE4UE1kdzNYUkJ2UVFqdVV3QkhULzBYaGhWT204L2lpeGR1b1FCMlNGMTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9lcXdqTnMwM0hBTjNnTjByTzdvWFFTZzZWNVdMVnNYZ2IxS3huaGYxK3Jab05hYzBwV1Y3VGF0WlhTT052NkxwZ0xEaGdyejVTdnl1VWtjeC92R0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpTDB6OUc1aEFQbHRtRnh4WDUwYmdvbjE5Nk5GRUZJYVpnemhGdEVxQlJFSFRmY1A1OXZCL2lML1NNeEpHcS9hblBKK3hyNnRXYmp2d28rdzFkY3BCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA1NTM1OTczMzoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVUER6SGNOMTBRYjBFSTdsTUFSMC85RjRZVlRwdlA0b3NYYnFFQWRraGRkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3ODM1NjM0fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "𝛭𝑅🥀𝛲𝑌𝑇𝛨𝛥𝐺𝛩𝑅𝛯",
  packname: process.env.PACK_NAME || "𝛭𝑅🥀𝛲𝑌𝑇𝛨𝛥𝐺𝛩𝑅𝛯",
  botname: process.env.BOT_NAME || "𝛭𝑅🥀𝛲𝑌𝑇𝛨𝛥𝐺𝛩𝑅𝛯",
  ownername: process.env.OWNER_NAME || "☞⌜𝛭𝑅🥀𝛲𝑌𝑇𝛨𝛥𝐺𝛩𝑅𝛯⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
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
