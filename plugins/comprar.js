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

🔰📤VENTA DE CUENTAS PERSONALES📤🔰

🏷PRIME VIDEO 3 MESES    
🏷PARAMOUNT+ 2 MESES  
🏷COMBO 1 MES
🏷STAR+

📤 CUENTAS POR 1, 2, 3 Y 5 MESES

🏷HBO MAX  
🏷CRUNCHYROLL 
🏷TIDAL

📤TAMBIEN CONTAMOS CON HITS (autopagables)
⚠️STAR+
⚠️VIKI RAKUTEN
⚠️PARAMOUNT+
⚠️CLARO VIDEO
⚠️DISNEY
⚠️TELECENTRO
⚠️IZZIGO
⚠️UNIVERSAL+
⚠️PORÑHUB
⚠️PLEX TV
⚠️DEEZER

📬SI DESEAS HACER PUBLICIDAD DE TU CANAL U OTRO PEDIDO TAMBIEN ACEPTAMOS

📤| METODOS DE PAGO:

-Paypal
-AirTM
- Cryptomonedas (BTC, USDT, LTC, Binance, Coinbase)
-Nequi 🇨🇴
-Pago Móvil 🇻🇪
-Transferencias Ecuador 🇪🇨
-Yape 🇵🇪

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
handler.command = /^(comprar|\?)$/i
handler.fail = null
module.exports = handler
