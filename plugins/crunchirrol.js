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

🍀 CRUNCHYROLL HIT 🍀
⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
michaelwilliams1230@outlook.com:Panda1230 | Plan:  | 21/07/2022, 09:05:11 | Crunchyroll Premium  ender.kkr@gmail.com:ender040295 | Plan:  | 21/07/2022, 09:05:12 | Crunchyroll Premium  dumortier.cody@gmail.com:WolfGamer18 | Plan:  | 21/07/2022, 09:05:16 | Crunchyroll Premium  marcelabbc07@gmail.com:b1ch0p1ruL3T4 | Plan:  | 21/07/2022, 09:05:18 | Crunchyroll Premium  leonardochagas_90@hotmail.com:2462leo1 | Plan:  | 21/07/2022, 09:05:19 | Crunchyroll Premium  dj.cris.11@hotmail.com:cgcs5599 | Plan:  | 21/07/2022, 09:05:20 | Crunchyroll Premium  ericsolano27@gmail.com:Es186095 | Plan:  | 21/07/2022, 09:05:22 | Crunchyroll Premium  levi.marinho1994@gmail.com:010796Levi | Plan:  | 21/07/2022, 09:05:23 | Crunchyroll Premium  zs@aksenterprise.com:Gettys7413 | Plan:  | 21/07/2022, 09:05:25 | Crunchyroll Premium  geoffrey.neyrinck@gmail.com:Caramel62 | Plan:  | 21/07/2022, 09:05:28 | Crunchyroll Premium 
 | gye123@live.com:Diaz1013 | Plan: | 21/07/2022, 09:05:30 | Crunchyroll Premium  alfa1omega0@gmail.com:01Smile07 | Plan:  | 21/07/2022, 09:05:31 | Crunchyroll Premium  | mpalese30@gmail.com:arcad3rrules | Plan:  | 21/07/2022, 09:05:32 | Crunchyroll Premium  | molivap90@gmail.com:reflexan12 | Plan: @pandaznetwork | 21/07/2022, 09:05:33 | Crunchyroll Premium  | christophernaue@aol.com:Assassin1! | Plan:  | 21/07/2022, 09:05:35 | Crunchyroll Premium  | iownall103@gmail.com:S9449678j | Plan: m | 21/07/2022, 09:05:36 | Crunchyroll Premium  | chriskirschman2@hotmail.com:F0llowthereaper | Plan:  | 21/07/2022, 09:05:37 | Crunchyroll Premium  | nealdominicaquino@gmail.com:gagalaako123 | Plan:  | 21/07/2022, 09:05:39 | Crunchyroll Premium  | ryantb8501@icloud.com:Sandyb123 | Plan:  | 21/07/2022, 09:05:42 | Crunchyroll Premium  | huy.p2000@gmail.com:Rostock12 | Plan:  | 21/07/2022, 09:05:43 | Crunchyroll Premium  | luisgerardoy@gmail.com:le7els | Plan:  | 21/07/2022, 09:05:44 | Crunchyroll Premium  | guica3123@gmail.com:01012001Gui
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
