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

🌱 • DISNEY• 🌱

📬Erika.c.nixon@gmail.com
🔑Nixon123
📬mrsdcochran@gmail.com
🔑beverages30 
📬lisakjones404@gmail.com
🔑Buster15!
📬patricaf98@gmail.com
🔑patricia22
📬katerina.younger@gmail.com
🔑katie72501
📬anitanicholaslily@gmail.com
🔑warm0863
📬haileephillips176@gmail.com
🔑Jesus123
📬aturchiano69@icloud.com
🔑turca001
📬gensch@gmail.com
🔑b00m-b00m
📬kristinamday@yahoo.com
🔑Kayla2004
📬zaibaak@yahoo.com
🔑Zaihan786
📬casiesmith2016@gmail.com
🔑Smith2016!
📬camii.lempke@gmail.com
🔑asher199
📬varni.marisa@gmail.com
🔑softba11
📬whitneyelaine_05@yahoo.com
🔑sniper07
j📬rpalmer77@gmail.com
🔑Jessicap1995
📬dezirae_givens@yahoo.com
🔑Manchu2001
📬ericabennett82@gmail.com
🔑kamri0703
📬rios.angie123@gmail.com
🔑onedirection123
📬airmax.mario@gmail.com
🔑Mario.1985

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
handler.command = /^(disney2|\?)$/i
handler.fail = null
module.exports = handler
