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

🌟DROP DE CUENTAS🌟
⋙▬▬▬▬▬▬★▬▬▬▬▬▬⋘ 

•SurfShark vpn

📨 keithp.guest@gmail.com
🔐 Ozorep1202!

Disney Plus (No Hit)

📨 Keit51_5@outlook.com
🔐 Ozorep1202!

•Crunchyroll Premium (No Hit)

📨 ffypsvupaybdnj@arxxwalls.com
📨 xiqavblxgxejjbg@arxxwalls.com

🔐 premium321

•Spotify Premium (3 meses)

📨 hbinsd_n230h@xuge.life
📨 carlo28a_m710u@chyju.com

🔐 premi321

•Scribd Premium

📨 egreent_b308o@yefx.info
📨 milanyoool16@gmail.com

🔐 regalo@Kp1202
___________________________
🔷️DISNEY & STAR +🟠
♻️ COMBO + ♻️

Email:📧
Pass:🔑 

❌️NO CAMBIAR NADA
❌️NO AGREGAR PERFIL
PARA QUE LA CUENTA DURE.
◆ ▬▬▬▬ ❴🔰❵ ▬▬▬▬ ◆

📧dpc.sls@hotmail.com
🔑c9p5au8naa 

📧daniellira113@gmail.com
🔑daniel74123 

📧redspider05@hotmail.com
🔑Dnstuff00 

📧tarsis.azevedo@gmail.com
🔑231988favela 

📧rodrigo.antonio@live.cl
🔑bebita2012

📧epalacio@bravatec.com.ar
🔑 Lalomita1981

📧eduardo.harfush.fitzmaurice@live.com
🔑edua2390

📧yo@miguelangelgutierrez.com.mx
🔑Mju7nhy6

📧alesaldivia@yahoo.com.ar
🔑Ren@ultK@le@sAD549RF 

📧samuelscm1@gmail.com
🔑samu4321  

📧orozcolean@gmail.com
🔑34870214Emma 

◆ ▬▬▬▬ ❴🔰❵ ▬▬▬▬ ◆

📛| NO CAMBIAR NADA, PARA QUE LA CUENTA LES DURE. UTILIZAR LOS PERFILES QUE ESTÁN AHÍ. 


📍| Recuerda Activar Las Notificaciones ✅

⋙▬▬▬▬▬▬★▬▬▬▬▬▬⋘

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
handler.command = /^(combo|\?)$/i
handler.fail = null
module.exports = handler
