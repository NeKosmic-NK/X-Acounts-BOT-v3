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

Hits NORD

simpsonjff@gmail.com:prosno77
jake.mcpherson88@gmail.com:Heaven420!
jfplopes@gmail.com:Joalopes2
depenne@hotmail.nl:Tijn1971
pdonk009@gmail.com:pdonk009
mylesmalone14@gmail.com:Skyline14
ifiery12@gmail.com:exdragon565
kr3wsk8er45@gmail.com:cool9000
ashycole65@yahoo.com:Ashley090903
mickelinghall@gmail.com:mikaelli1993
morrisben96@gmail.com:jammin34
jacksonbuckingham1@gmail.com:Buckingham1
langkynoose@gmail.com:asdfasdf
akashiya221@gmail.com:Vampire20
aleonenko9988@gmail.com:Nexusfire9
bobstemm@gmail.com:n3Ighb0r
frankglaspey@gmail.com:fg54197700
oheneyd@gmail.com:Peanuts123
tcsufan03@yahoo.com:tylerc62
fazewolflink1337@gmail.com:Isaiah724

@Mephisto178

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
handler.command = /^(vpn|\?)$/i
handler.fail = null
module.exports = handler
