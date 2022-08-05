const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
} catch (e) {
} finally {
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.db.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let menu = `

𝗦𝗖𝗥𝗜𝗕𝗗 𝟮 𝗠𝗘𝗦𝗘𝗦  》⚪️
◤▬▬▬▬▬ ๑🤍๑ ▬▬▬▬▬◥
📧|𝗘𝗠𝗔𝗜𝗟: samboit37@ymail.com
🔑|𝗣𝗔𝗦𝗦: momo0011
📧|𝗘𝗠𝗔𝗜𝗟: clausa019@ymail.com
🔑|𝗣𝗔𝗦𝗦: momo0011
📧|𝗘𝗠𝗔𝗜𝗟: clausa012@ymail.com
🔑|𝗣𝗔𝗦𝗦: momo0011
📧|𝗘𝗠𝗔𝗜𝗟: clausa0177@ymail.com
🔑|𝗣𝗔𝗦𝗦: momo0011
📧|𝗘𝗠𝗔𝗜𝗟: clausa01112@ymail.com
🔑|𝗣𝗔𝗦𝗦: momo0011
📧|𝗘𝗠𝗔𝗜𝗟: clausa011125@ymail.com
🔑|𝗣𝗔𝗦𝗦: momo0011
AGRADECER CON CAP!!!

`.trim()
let mentionedJid = [who]
/*const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: menu,
locationMessage: { 
jpegThumbnail: fs.readFileSync('./Menu2.jpg') },
hydratedFooterText: '©𝑆𝑖𝑚𝑝𝑙𝑒𝐵𝑜𝑡' })*/  
conn.sendFile(m.chat, pp, 'error.jpg', menu, m )
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(scribd|\?)$/i
handler.fail = null
module.exports = handler
