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

๐ฆ๐๐ฅ๐๐๐ ๐ฎ ๐ ๐๐ฆ๐๐ฆ  ใโช๏ธ
โคโฌโฌโฌโฌโฌ เน๐คเน โฌโฌโฌโฌโฌโฅ
๐ง|๐๐ ๐๐๐: samboit37@ymail.com
๐|๐ฃ๐๐ฆ๐ฆ: momo0011
๐ง|๐๐ ๐๐๐: clausa019@ymail.com
๐|๐ฃ๐๐ฆ๐ฆ: momo0011
๐ง|๐๐ ๐๐๐: clausa012@ymail.com
๐|๐ฃ๐๐ฆ๐ฆ: momo0011
๐ง|๐๐ ๐๐๐: clausa0177@ymail.com
๐|๐ฃ๐๐ฆ๐ฆ: momo0011
๐ง|๐๐ ๐๐๐: clausa01112@ymail.com
๐|๐ฃ๐๐ฆ๐ฆ: momo0011
๐ง|๐๐ ๐๐๐: clausa011125@ymail.com
๐|๐ฃ๐๐ฆ๐ฆ: momo0011
AGRADECER CON CAP!!!

`.trim()
let mentionedJid = [who]
/*const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: menu,
locationMessage: { 
jpegThumbnail: fs.readFileSync('./Menu2.jpg') },
hydratedFooterText: 'ยฉ๐๐๐๐๐๐๐ต๐๐ก' })*/  
conn.sendFile(m.chat, pp, 'error.jpg', menu, m )
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(scribd|\?)$/i
handler.fail = null
module.exports = handler
