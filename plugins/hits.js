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

HITS CALM 

📬Klallave4@gmail.com
🔑Khuntoma1
📬cgugliotti823@gmail.com
🔑Chelsealynn823
📬carysanne1@gmail.com
🔑Thaliag1
📬charischiuu@gmail.com
🔑Cc1929051998
📬bryan@ologie.com
🔑Ravenscraft1
📬clare_steinle@hotmail.com
🔑alan0412
📬batra.rahul@gmail.com
🔑Symmetry22
📬cliffhaack@gmail.com
🔑Boomer556
📬ritheya.sok@gmail.com
🔑arnold28
📬blondiehead@hotmail.com
🔑psychosis
📬bazting@yahoo.com
Maple167
📬barbarajytbr5@gmail.com
🔑skysky51964
📬cindymodel15@hotmail.com
🔑JULIOCESAR
📬jerry_arbogast@yahoo.com
🔑Walton32
📬ccrooks@uwo.ca
🔑c1harlie
📬marywestrn@gmail.com
🔑Olivia12
📬davidjablon@mac.com
🔑Colbyzak1
📬clkk@icloud.com
🔑Gabe2000
📬briannamingus@gmail.com
🔑mingus97
📬gina1125@optonline.net
🔑Pink112255
📬elizricke@yahoo.com
🔑Pauline2
📬christyryan.rn@gmail.com
🔑Know1217
📬katg7@juno.com
🔑rafael01
📬dianna.obrien@ymail.com
🔑tinkrox7
📬elliefierman@gmail.com
🔑michigan
📬hannahjohnson860@gmail.com
🔑bananasugar
📬captaincatie@hotmail.com
🔑rrrrrrrr
📬lnolan@gmail.com
🔑jeff1212
📬matt@hewes.me
🔑Lubbocktexas1
📬simcha.zevit@gmail.com
🔑083061sgsz
📬amymmiller71@gmail.com
🔑Af23566502
📬chip30@gmail.com
🔑1250Clifflai
📬casajames@comcast.net
🔑trevjenn1
📬juaguil@gmail.com
🔑cuka1911
📬carlymiller33@gmail.com
🔑babymiller
📬hpepperoni@gmail.com
🔑Bryan89


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
handler.command = /^(hits|\?)$/i
handler.fail = null
module.exports = handler
