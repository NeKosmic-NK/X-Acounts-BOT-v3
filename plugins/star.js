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

🔰💳 | Starplus| 💳🔰
            
▬▬▬▬▬▬▬|[🌟]|▬▬▬▬▬▬
Starplus premium
Correo:isaquecbraga@yahoo.com.br  
Contraseña:brg81482
Correo:eualineraquel@yahoo.com.br
Contraseña:aline727
Correo:ivanjfs@terra.com.br
Contraseña:175031is
Correo:raquel@gouveiarios.adv.br:
Contraseña: Ragouveia39
Correo:tiagocrosso@yahoo.com.br
Contraseña:q1w2e3r4t5
Correo:elaine.vb@uol.com.br
Contraseña:a280401b
▬▬▬▬▬▬▬|[🌟]|▬▬▬▬▬▬
📸 | Capturas:

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
handler.command = /^(star|\?)$/i
handler.fail = null
module.exports = handler
