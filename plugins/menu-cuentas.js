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

╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${username}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯

┏━━━━━━━━━━━━━┓
┃ *< COMANDOS >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ En este Bot se subiran cuentas 
┣ premiums todas las semanas.
┣ Recuerda ser humilde, agarrar pocas
┣ cuentas y no cambiarle las contraseña
┣ para que todos puedan disfrutar de
┣ las cuentas.
┣ Recuerda agradecer con captura
┣ y con el @ de mi owner
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ wa.me/+34623442554
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ CUENTAS PREMIUM DISPONIBLES
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _${usedPrefix}hbo_
┣ ඬ⃟💫 _${usedPrefix}disney_
┣ ඬ⃟💫 _${usedPrefix}disney2_
┣ ඬ⃟💫 _${usedPrefix}hits_
┣ ඬ⃟💫 _${usedPrefix}acorntv_
┣ ඬ⃟💫 _${usedPrefix}crunchirrol_
┣ ඬ⃟💫 _${usedPrefix}star_
┣ ඬ⃟💫 _${usedPrefix}paramount_
┣ ඬ⃟💫 _${usedPrefix}primevideo_
┣ ඬ⃟💫 _${usedPrefix}spotify_
┣ ඬ⃟💫 _${usedPrefix}vpn_
┣ ඬ⃟💫 _${usedPrefix}clarovideo_
┣ ඬ⃟💫 _${usedPrefix}scribd_
┣ ඬ⃟💫 _${usedPrefix}comprar_
┗━━━━━━━━━━━━━┛
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
handler.command = /^(cuentas|\?)$/i
handler.fail = null
module.exports = handler
