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

🔰💳 | DISNEY | 💳🔰
            
▬▬▬▬▬▬▬|[🌟]|▬▬▬▬▬▬

pepiqwz12@gmail.com : 12345678siu guysbastien11@gmail.com:Imagination0 mr.darknight.1@gmail.com:Flamme11 seb_orry@hotmail.fr:Ak1nat0r yayadufoot@hotmail.fr:13marseille. tyzun2702@gmail.com:Maxime02 oriente.solene31@gmail.com:Oriente31 kylian.barthelemy2003@gmail.com:Kylian2003 kjmano@gmail.com:Hermann1 n.roche214@gmail.com:Nathanael21 lbesancon71@gmail.com:lea001968 clanofwar.gw@gmail.com:foot2002 guillien.m@gmail.com:T1i9n9a7 lucasdeniau26@gmail.com:Sasutachi2606 doum84@gmail.com:fisoncodio cedric.ck2@gmail.com:Fif4588x fantouch91@hotmail.com:poulpic22 ilyes.sekhri23@gmail.com:Ilyesdu93 quentin0301@gmail.com:champion42 theostan@hotmail.fr:noemie houllegattelaurie@gmail.com:L91doncaster

▬▬▬▬▬▬▬|[🌟]|▬▬▬▬▬▬
📸 | Capturas
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
handler.command = /^(disney|\?)$/i
handler.fail = null
module.exports = handler
