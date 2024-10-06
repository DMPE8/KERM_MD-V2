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
global.sudo = process.env.SUDO || "+242069321093";
global.owner = process.env.OWNER_NUMBER || "+242069321093";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1B5V2t4a25mdFMrb2FMN3h0b1Zta05GWHVjNE9pczVJS0JxVVM4ZjRVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2YwbGEra3ArS0VKSDZuTStLZTdiYnFBYmFETTd6Skp6RzhsNkhaaHpWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSTI4WXEzb0FTMGxnTnEwcWJDUGordmtzZnJDbUJTVEYydndqUGg3YmxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2eFpNU2RWeVhlWlBRVFFJRENmajRQbnNnbUdJM2ZEd0Fydmh2ZnZyT1JzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HV0JaUm1JU29zWTBnTllVeUUvdUZJek95WkU3aWpubWZQMUhLTDIvVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN6MzJBbzJqNit5RlFJVElVMmdVRmxOdVNQL1BkQXgvZWJNd1gySjNNUTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RoR00wL0l5YVVROTduajhHU1hHWEFad1poM3hoWU0vamxBNFZjc0gyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXZoZ3ZEMzZ4MXdYWVEvdmw5RXErUUw0WjcySXpEdlhWbEVUSkgrekpDZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ0VDRLL281WEVxYmorK2RoY0F5R3NxS2RwM056ZkxubmFIMEVYWHFkTWZOaituckUxdXIvQUtGN0dPOXpmOGM4dC9CdnRzQUhGOW5CMis5L0dNMGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJLVmZ0cXlDSTBQbXVSKzRnT0VWQTFwQzdmMUtMZTZlT05GbnJyZW1vaVRFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4LUlkc0pHUlRaTzd4cEdTQzlzanNRIiwicGhvbmVJZCI6IjY2NGNjZDgxLTNmODQtNDk3OS05YzY0LWRlNjVhMTc1ODg0YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKdjR4cVVLbGREQXB4NEluY0dpOG9UUU1jbEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1NkL1MzM1h1TWVXcHFaQVczTmFqNlE3VlNjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBYNFY2VDc2IiwibWUiOnsiaWQiOiIyNDIwNjkzMjEwOTM6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCL8J2QjvCdkJHwnZCD4qu48J2Qg/CdkIjwnZCA8J2QgfCdkIvwnZCOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPNzZ0WlVCRUovWmlyZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGWW1IaVF6RFBmNDRiTmdNcXNBbEpZZndTTFZldjRySnlMMVBzbmNYZEFvPSIsImFjY291bnRTaWduYXR1cmUiOiJGQ0xJTllYRlpaRTNiem1zU3ZyRjZxcUx6aVhYejVHWVRnalNPeEZhT21ZUkNjK2VBd1JmZkJ6cW9hRFpSTlNKeE9RUkZHWlR5bm1uclkvWExpeW9BUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRkdESHoxSk1EQUd2OHpDS0djbkxKVWt5V0JmUHhNSzhRNVdzRDlicVJucnNiV0lnYjluTWR1OWozMDJTMGtTUnJsa21kemt0ZiszdVQrcmxvU1BVaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNjkzMjEwOTM6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSV0poNGtNd3ozK09HellES3JBSlNXSDhFaTFYcitLeWNpOVQ3SjNGM1FLIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MjI4NTI0fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜𝐷𝛪𝛥𝐵𝐿𝛩 𝑆𝛥𝐿𝛻𝛥𝐷𝛩𝑅⌝☜`",
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
