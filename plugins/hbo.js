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
NEW ACCOUNTS!!!

CUENTAS HBO MAX 

"Solo Usar No Cambiar Nada Envien Capturas Para Mas"

amiyashoward@gmail.com:5567890Aa
enrique.j.gonzalez55@gmail.com:Ianenrique07
danny-and@hotmail.com:DaniDani214
logan0403@hotmail.com:@Taelyn2015
dmiguel070@gmail.com:Miguel_Andrea2020
robben0204@hotmail.com:Megan0219!
matt@s2sperform.com:Raiders16#
mmumin1975@gmail.com:marcin.MROZEK75
adrianacipere@yahoo.com:Loredan99
jd81102@hotmail.com:Veneno81
felipedias15@live.com:Aslvjkxml#165
info@novaidea.pro:Rs270796
silvia.malodemolina@gmail.com:Claudiadaniela2
daliasanchez@gmail.com:*Dalila123

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
