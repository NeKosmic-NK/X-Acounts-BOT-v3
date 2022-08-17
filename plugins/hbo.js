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

CUENTAS DE HBO
NO CAMBIAR LA CONTRASEÑA A NINGUNA CUENTA O DEJAREMOS DE DAR.
Jeremych7@yahoo.com
aboutason8 
teresabulluck@yahoo.com
bulluck01
aaronfonde@cox.net
af33233323 
maduhhhline@yahoo.com
Dirtbike$2 
tiradokevin25@gmail.com
killer05
dianaeguzman@yahoo.com.ar
ehdlc013
trillo_emiliano@yahoo.com.ar
toysis24
amanecer.3@live.com.ar
labrujula8
joseboesmi@yahoo.com.ar
JOEL1994
guillendarrell@yahoo.com:Familyis1
zaki_chy@yahoo.com:Astoria1
bree.white21@gmail.com:Coolgirl1!
monroeeli@yahoo.com:Bigmike101
schwarkjames@yahoo.com:Natalie2008
jessir2002@gmail.com:MAMA'Sgirl2002
_____________________________
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
handler.command = /^(hbo|\?)$/i
handler.fail = null
module.exports = handler
