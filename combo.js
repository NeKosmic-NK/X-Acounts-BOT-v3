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

πDROP DE CUENTASπ
ββ¬β¬β¬β¬β¬β¬ββ¬β¬β¬β¬β¬β¬β 

β’SurfShark vpn

π¨ keithp.guest@gmail.com
π Ozorep1202!

Disney Plus (No Hit)

π¨ Keit51_5@outlook.com
π Ozorep1202!

β’Crunchyroll Premium (No Hit)

π¨ ffypsvupaybdnj@arxxwalls.com
π¨ xiqavblxgxejjbg@arxxwalls.com

π premium321

β’Spotify Premium (3 meses)

π¨ hbinsd_n230h@xuge.life
π¨ carlo28a_m710u@chyju.com

π premi321

β’Scribd Premium

π¨ egreent_b308o@yefx.info
π¨ milanyoool16@gmail.com

π regalo@Kp1202


π| Recuerda Activar Las Notificaciones β

ββ¬β¬β¬β¬β¬β¬ββ¬β¬β¬β¬β¬β¬β

`.trim()
let mentionedJid = [who]
/*const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: menu,
locationMessage: { 
jpegThumbnail: fs.readFileSync('./Menu2.jpg') },
hydratedFooterText: 'Β©πππππππ΅ππ‘' })*/  
conn.sendFile(m.chat, pp, 'error.jpg', menu, m )
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(combo|\?)$/i
handler.fail = null
module.exports = handler
