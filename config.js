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
global.sudo = process.env.SUDO || "+242066443038";
global.owner = process.env.OWNER_NUMBER || "+242066443038";
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
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dRYWtWMzJ0YUdOdTRSNjYzUGIrY0RPcGFtQll0cFJ5VktMdHJ2aDgwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibCthcjZteHlLK1RKd3U3TmY3d2cxcm9YLzJkZ2xJV3NiT09VM3lXUVhIUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSXNVSkJsZ2lvZ1lNd3E4RnlHYUNWdFd4V0NxYnJsdElGaUxKWnRBcVhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFbnppTUZvUVNQc1ZTVWFueVNMZm1XY2hZb0oyRGsxMlZvRTBVVmtpZ2tBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNWWRiVFJsTEZvVUJUZ2M3Q3lpaFl0WjdtVkY1THFBSDVQdVdhYVhqRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4xQ1FHUjNQOW1xdkF3dmRLZFZhSnEyc2F5RDhMeWZMaVRyWmtvL2NhU1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUgrR0F2Z3pWamVWRXhwaUhKbkdybDltWTF4RHptMTBxd2NGVUh3YWFXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHlwb21ncVZrL28rTW01K3ZBSFRubTM1bzA4VmVxSU5iZEFzdnZtU1dEaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNoZFhRbEJ2UTkvaVpScjJIaHZEQjQ0TTJ4UUhZNDhlSk8wc0piUVVjY1N2Y0tGNXFGUnlRZlVTem1uOG1oRHg5YzJVdjdwbGVpQlBsYWFCb3NWYmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6Ik1ERHRhd1liSGdIRk1vU2prMXdMVGpoUjZnaERkREhIeXp2ekVGdGw3R3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdJSkhYS29JVEdLYjZpZHdqWE4xLVEiLCJwaG9uZUlkIjoiMTFhODQ4OTgtZjdhNS00YTNlLWFhODItZDI2NDRiMzU2ODQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVyUVdiL1I1TktGT1R3eVpCM3BTZytvdFZrcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrYVNJOVRYemN6cEdCSDlVK092M0M1ZjdrR3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOEVNWlhMNTQiLCJtZSI6eyJpZCI6IjI0MjA2NjQ0MzAzODo1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKQ3NnYXdFRUttaThyY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOeExySmpNeXB2R3EvRVM3ZmhrdU8ydjhMTVJZZ0xuSS9RVmFKSHVNRTM4PSIsImFjY291bnRTaWduYXR1cmUiOiJST3NNT2hFWTdGSHF4VzNRVkNPZmIwRDBrU25nemVydUFaa2N3dmlyd2hsUjNqL0p3RXBTbDVJdFp5T0ZkNHBUcWdiWUtNb1UwSTZIeThoU1BxWHdCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMWE5Z0oxaHNsWWI3aW1URXJCR09WZ2QrNjZFV2s4Ym0vNVZnSnJTK0xRZElPZndtdk04RmI1SmwvNWZlc3h6QlIvV204S2ZQb3RuVndnNmFCYmhuaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNjY0NDMwMzg6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUY1M2eVl6TXFieHF2eEV1MzRaTGp0ci9DekVXSUM1eVAwRldpUjdqQk4vIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3ODI4Mjc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVLaSJ9s"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "⚖️𝑩𝒊𝒍𝒍𝒊𝒆༄♛༄𝑬𝒊𝒍𝒊𝒔𝒉✮𝐒𝐎𝐌𝐁𝐑𝐄𒀱ꪳ",
  packname: process.env.PACK_NAME || "⚖️𝑩𝒊𝒍𝒍𝒊𝒆༄♛༄𝑬𝒊𝒍𝒊𝒔𝒉✮𝐒𝐎𝐌𝐁𝐑𝐄𒀱ꪳ",
  botname: process.env.BOT_NAME || "⚖️𝑩𝒊𝒍𝒍𝒊𝒆༄♛༄𝑬𝒊𝒍𝒊𝒔𝒉✮𝐒𝐎𝐌𝐁𝐑𝐄𒀱ꪳ",
  ownername: process.env.OWNER_NAME || "☞⌜⚖️𝑩𝒊𝒍𝒍𝒊𝒆༄♛༄𝑬𝒊𝒍𝒊𝒔𝒉✮𝐒𝐎𝐌𝐁𝐑𝐄𒀱ꪳ⌝☜",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "publique",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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
