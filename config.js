const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09sbDRTWDQzMVhwZTFVVVM2NUR6bloxbDVVUEpqUXhMQlJ1VVpTbG0wUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGR5amswblltZFIyWlVTRDQ4NG5kL0k3ZTlsMTJ6QU9hUkV4d1h3eVNRTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSytYSUVMZjNwaTBDUkR1cVo1M05pRmMxTlRNMFRzL0RqRy94ejZxR1hjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUHBFVDJPZTl6MjRKbFVjY2NSeHNzcm9RbE53RlZxSW45THN1a21RYURVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFeU5kTWltSmNEd0ZEYmJLUzRMYU8zRXp0TXBSMXdRbzdQU3B4K0JabGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdYOWtPbjM5eTVVNjBaNmNuZ0w5NWdNODZCNXlnTXZSalhrSjZVbmdaSE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdpR3BHLzdGY2xKOURRclZZNmlYSE9WNXA1VE1HTURpY0cwZWxyUWRFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTBlMUdnbzJTRkdIdE9IaWZSL0hJYjR1aXNyS2wwV2E5YkVqNGxXTGh3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlljWVRNdzlxUmFZN0ZCWm1kSHVxUkRQbXd4dnZYaE5NUVNIdGxab3JQVE05Tjhudk9GQWpyVFBlNVBFWlFiZm54TGltbmVXZ3U4b2Q2bUxTMWhzSUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6IkRGSURYQWZEWE5YZjFlemdlSDFoWnJ2UjNtZHBwT3RlZlppYWJyQmY5SnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE2MjkwMjI4NjIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNDMDI1RkNCQUE5QjlCOTFEMTFDQTk0OEMzQTk5QUNDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDg1MTc5MjJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNjI5MDIyODYyMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENEZEM0MyODJFOThBOTkzQjFDQUNBMzYyN0Y1NTAzNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ4NTE3OTI1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiOTE2MjkwMjI4NjIwOjIwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjE2Njc2OTU2MTY4MjEyOjIwQGxpZCIsIm5hbWUiOiLwn5Ck8J+NpyDwnZO7zrHwnZOX8J2TiuKEkyDwn5KY8J+RpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTS9zOTQ0REVJK0k0Y0VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSXlDTzlJc2MyOHJLd1p5Ynd5Z25zU0kvQnd3VHlkNTRpL1hlR0llRjFqYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTUtGUFNPL3RQWW82aGdmM1ZjczhwNnJvVVZiQ29ybG1YQWZ5K1RtWjUrUkF1Nm5iaU11UVJtek5IK0grREp3dVFXRHlUY25rcFFuajBZeHcwQldSREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJOQzdlTWZqVGN6Lzg5NE1VTytiaHFuK3p1NTcrbXpuQkxNUTJ4ZFAxZ3BKK29QN2xHb2NwL2RtVmpRcFNuQklzMjdQSjlpM3VhUURLSHhLRWI2UER3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2MjkwMjI4NjIwOjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNNZ2p2U0xITnZLeXNHY204TW9KN0VpUHdjTUU4bmVlSXYxM2hpSGhkWTMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0ODUxNzkxNiwibGFzdFByb3BIYXNoIjoiQzRmSk4iLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV5NCJ9 ",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY GOTAR-XMD 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/82b8gr.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐆𝐎𝐓𝐀𝐑 𝐗𝐌𝐃",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝐆𝐎𝐓𝐀𝐑 𝐗𝐌𝐃",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "18494967948",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐆𝐎𝐓𝐀𝐑",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/82b8gr.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *𝐆𝐎𝐓𝐀𝐑 𝐗𝐌𝐃*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "18494967948",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
