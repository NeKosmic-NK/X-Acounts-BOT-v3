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

🟩 CUENTAS DE SPOTIFY PREMIUM 🟩
⋙▬▬▬▬▬▬★▬▬▬▬▬▬⋘ 

💌 tooeggpin@ccmail.uk
🔐 tooeggpin@ccmail.uk

💌 skyold536@ccmail.uk
🔐 skyold536@ccmail.uk

💌 iongasink@ccmail.uk
🔐 iongasink@ccmail.uk

💌 tapifcow@ccmail.uk
🔐 tapifcow@ccmail.uk

💌 nortubbat@ccmail.uk
🔐 nortubbat@ccmail.uk

💌 pegrow189@ccmail.uk
🔐 pegrow189@ccmail.uk

💌 toospa189@ccmail.uk
🔐 toospa189@ccmail.uk

💌 nuninpie@ccmail.uk
🔐 nuninpie@ccmail.uk

💌 netagojug@ccmail.uk
🔐 netagojug@ccmail.uk

💌 penhamhen@ccmail.uk
🔐 penhamhen@ccmail.uk

📍| Recuerda Activar Las Notificaciones ✅

⋙▬▬▬▬▬▬★▬▬▬▬▬▬⋘
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
handler.command = /^(spotify|\?)$/i
handler.fail = null
module.exports = handler
