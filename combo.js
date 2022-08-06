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

🌟DROP DE CUENTAS🌟
⋙▬▬▬▬▬▬★▬▬▬▬▬▬⋘ 

•SurfShark vpn

📨 keithp.guest@gmail.com
🔐 Ozorep1202!

Disney Plus (No Hit)

📨 Keit51_5@outlook.com
🔐 Ozorep1202!

•Crunchyroll Premium (No Hit)

📨 ffypsvupaybdnj@arxxwalls.com
📨 xiqavblxgxejjbg@arxxwalls.com

🔐 premium321

•Spotify Premium (3 meses)

📨 hbinsd_n230h@xuge.life
📨 carlo28a_m710u@chyju.com

🔐 premi321

•Scribd Premium

📨 egreent_b308o@yefx.info
📨 milanyoool16@gmail.com

🔐 regalo@Kp1202


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
handler.command = /^(combo|\?)$/i
handler.fail = null
module.exports = handler
