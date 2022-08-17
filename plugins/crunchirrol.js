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

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
🟠 CRUNCHYROLL ACCOUNT 🟠
▃▃▃▃▃▃▃▃▃▃▃

jstorrie@ualberta.ca:frogourt | Subscription = cr_premium.1_month 
josedavidchivo@hotmail.com:maxxd456 | Subscription = cr_fan_pack.1_month 
rhendricks03@gmail.com:cracker1 | Subscription = cr_fan_pack.1_month 
juhman112@gmail.com:Andrew12 | Subscription = crunchyroll.google.premium.monthly   
nickmuffin@hotmail.com:runescape1 | Subscription = cr_premium.1_month 
jaxsonellis@gmail.com:jaxson99 | Subscription = cr_fan_pack.1_year 
jacksondream@live.com:91485882 | Subscription = cr_premium.1_month 
lachsman92@gmail.com:Fireice23! | Subscription = crunchyroll.google.premium.monthly   
manfromthemoon@hotmail.it:95m9tzqg | Subscription = cr_premium.1_year 
jrd1250@gmail.com:d4meleeman | Subscription = crunchyroll.google.superfanpack.monthly   
exodia_netvirus@hotmail.com:chocoman | Subscription = crunchyroll.google.fanpack.annually   
allentsai_11@hotmail.com:dungeons | Subscription = cr.ios.anime.monthly.7dayft  
rodrigocorreia2000@hotmail.com:Correia2000 | Subscription = cr_fan_pack.1_month 
kresen4life@icloud.com:420H0rde!! | Subscription = cr.ios.anime.monthly.7dayft  

📸|Capturas
▃▃▃▃▃▃▃▃▃▃▃
↕️↕️↕️↕️↕️↕️↕️↕️↕️↕️
📌 www.crunchyroll.com
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

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
handler.command = /^(crunchirrol|\?)$/i
handler.fail = null
module.exports = handler
