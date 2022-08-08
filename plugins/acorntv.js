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

AcornTV Premium

stulongman@gmail.com:Israel01 | Subscription = AcornTv Monthly | Expiry Date = 08/13/2022 | bobmarley
prandall@sch.org:Taeping89 | Subscription = AcornTv Monthly | Expiry Date = 08/01/2022 | bobmarley
drkatediva@msn.com:gennie98 | Subscription = AcornTv Monthly | Expiry Date = 07/28/2022 | bobmarley
jgraham.nyc@gmail.com:Flinsk1508 | Subscription = AcornTv Monthly | Expiry Date = 07/27/2022 | bobmarley
cobrakisz@gmail.com:Harleen77! | Name = Justin Dodd | Subscription = AcornTv Monthly | Expiry Date = 07/20/2022 | bobmarley
wmustelier@aol.com:Pipirili1 | Name = William Mustelier | Subscription = AcornTv Monthly | Expiry Date = 08/14/2022 | bobmarley
shelley@shelleygorson.com:escrow3733 | Name = Shelley Gorson | Subscription = AcornTv Yearly | Expiry Date = 07/05/2023 | bobmarley
rosenblu@andrew.cmu.edu:Pandamom#1 | Subscription = AcornTv Monthly | Expiry Date = 08/11/2022 | bobmarley
andrewfoote@comcast.net:TessTess1 | Subscription = AcornTv Monthly | Expiry Date = 07/16/2022 | bobmarley
haven1285@gmail.com:Shelley12# | Subscription = AcornTv Yearly | Expiry Date = 07/19/2022 | bobmarley
courtney.walsh01@hotmail.com:Rosemary1994 | Subscription = AcornTv Monthly | Expiry Date = 08/12/2022 | bobmarley
pcullman@yahoo.com:sail1952 | Subscription = AcornTv Yearly | Expiry Date = 06/09/2023 | bobmarley
pattymcgillin@yahoo.com:Thursday1 | Subscription = AcornTv Yearly | Expiry Date = 06/11/2023 | bobmarley
hpinkney@hotmail.com:Ginger77 | Subscription = AcornTv Yearly | Expiry Date = 02/18/2023 | bobmarley
castingabout@comcast.net:bodhidog69 | Subscription = AcornTv Yearly | Expiry Date = 09/17/2022 | bobmarley
aishaniazi@gmail.com:Diggler99! | Subscription = AcornTv Monthly | Expiry Date = 08/13/2022 | bobmarley
hspii@aol.com:hspj7465 | Subscription = AcornTv Yearly | Expiry Date = 04/21/2023 | bobmarley
amyemacdonald@yahoo.com:Stelzel1 | Name = Amy MacDonald | Subscription = AcornTv Monthly | Expiry Date = 08/01/2022 | bobmarley
schillinc@yahoo.com:Dejavu11 | Subscription = AcornTv Monthly | Expiry Date = 08/03/2022 | bobmarley
gssnll@netzero.com:Jwayne33 | Subscription = AcornTv Monthly | Expiry Date = 08/03/2022 | bobmarley
derrickmontanez5656@gmail.com:Blue565656 | Subscription = AcornTv Monthly | Expiry Date = 07/27/2022 | bobmarley

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
handler.command = /^(clarovideo|\?)$/i
handler.fail = null
module.exports = handler
