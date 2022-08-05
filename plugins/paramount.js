/*
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


🔰💳 |PARAMOUNT PLUS| 💳🔰
            
▬▬▬▬▬▬▬|[🌟]|▬▬▬▬▬▬
Hits 
emmaplant@live.co.uk:Fatass96
s.policki@hotmail.co.uk:smidge123
sarasyed98@hotmail.co.uk:lola12lola12
jadejefferies@yahoo.co.uk:Holla!123
trudykhicks@yahoo.co.uk:Trampoli123
elliemai2000@hotmail.co.uk:chester5
tsolution@hotmail.co.uk:Elwell1624
dscpryde@hotmail.co.uk:butterfly8
rosiebell@live.co.uk:rozike13
molly.whittaker@hotmail.co.uk:Happy345
jordencollins1990@yahoo.co.uk:Hamlet1990
▬▬▬▬▬▬▬|[🌟]|▬▬▬▬▬▬
📸 | Capturas
`.trim()
let mentionedJid = [who]
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: menu,
locationMessage: { 
jpegThumbnail: fs.readFileSync('./Menu2.jpg') },
hydratedFooterText: '©𝑆𝑖𝑚𝑝𝑙𝑒𝐵𝑜𝑡',
hydratedButtons: [{
urlButton: {
displayText: '𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼',
url: 'https://www.instagram.com/invites/contact/?i=5yv9hdjlc3sw&utm_content=ohvhscn'
}},
{
urlButton: {
displayText: '︎𝙾𝚆𝙽𝙴𝚁',
url: 'https://wa.me/34623442554'    
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}}]}}
}), { userJid: m.sender, quoted: m });
return await conn.relayMessage(
m.chat,
template.message,
{ messageId: template.key.id })    
    
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
*/
