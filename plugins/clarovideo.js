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

Cuentas de CLARO VIDEO
santi_bastida@hotmail.com:Maximo200 | pago = "hubcorporativofijogate" | tipo_usuario = CARNOVIP | region_usuario = argentina | BY:  = (@LORDMICRO001) 
adolfigo@gmail.com:Acuario7 | pago = "hubfacturafijagate" | tipo_usuario = CCONOVIP | region_usuario = colombia | BY:  = (@LORDMICRO001) 
argenis_619@hotmail.com:Farruko23 | pago = "telmexmexicogate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
contabil_patty@hotmail.com:Isa@1040 | pago = "hubgate" | tipo_usuario = CBRNOVIP | region_usuario = brasil | BY:  = (@LORDMICRO001) 
criscal5@hotmail.com:Ferney01 | pago = "hubfacturafijagate" | tipo_usuario = CCONOVIP | region_usuario = colombia | BY:  = (@LORDMICRO001) 
alexrivera2191@yahoo.com:papago21@! | BY:  = (@LORDMICRO001) 
sierrabaker7859@gmail.com:papagoat254 | BY:  = (@LORDMICRO001) 
annapago@tele3.it:silvia | BY:  = (@LORDMICRO001) 
kxtwisty@ucla.edu:1pagoda | BY:  = (@LORDMICRO001) 
migue1306@hotmail.com:20411130 | pago = "hubfacturafijagate" | tipo_usuario = CCONOVIP | region_usuario = colombia | BY:  = (@LORDMICRO001) 
elnavegantee@yahoo.com.mx:caldoDEres2012 | pago = "telmexmexicogate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
jlgonzalez583@yahoo.com.mx:90969096 | pago = "hubgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
red_zehcnas@yahoo.com.mx:relampago | BY:  = (@LORDMICRO001) 
naninr2@yahoo.com.mx:riveras | pago = "hubgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
titanioengmac@yahoo.com.mx:relampago965540 | BY:  = (@LORDMICRO001) 
luispago2008@yahoo.com.mx:2009Cerchio1972 | BY:  = (@LORDMICRO001) 
mick_is2005@yahoo.com.mx:machetefil007 | pago = "hubgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
mi_secta@yahoo.com.mx:giss1120 | pago = "hubgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
isabel_kitty12@yahoo.com.mx:nucita1208 | pago = "telmexmexicogate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
abdelyasid@yahoo.com.mx:pagos123456 | BY:  = (@LORDMICRO001) 
kacangpagoda@yahoo.com.mx:ibrahim1992 | BY:  = (@LORDMICRO001) 
geresp05@yahoo.com.mx:sanver05 | pago = "itunesgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
autopagoinmediato3@yahoo.com.mx:50minutos | BY:  = (@LORDMICRO001) 
autopagoinmediato4@yahoo.com.mx:50minutos | BY:  = (@LORDMICRO001) 
brisdel123@yahoo.com.mx:zoealejandra | pago = "hubgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
elmoji72@yahoo.com.mx:721021 | pago = "hubgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
manuelsanchezmercado@yahoo.com.mx:210681 | pago = "plazavipgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
fwmexico@yahoo.com.mx:100384 | pago = "plazavipgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
pagola2000@yahoo.com.mx:japc110180 | BY:  = (@LORDMICRO001) 
ligia_cardenasm@yahoo.com.mx:ligia05 | pago = "telmexmexicogate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
pagovero@yahoo.com.mx:alexander | BY:  = (@LORDMICRO001) 
gupago57@yahoo.com.mx:120607 | BY:  = (@LORDMICRO001) 
vargasmigue1@yahoo.com.mx:vargasm01 | pago = "telmexmexicogate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
nadesgab@yahoo.com.mx:miamor | pago = "plazavipgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
mariana.pagola@yahoo.com.mx:princesa | BY:  = (@LORDMICRO001) 
enilaiztim@yahoo.com.mx:B33tl3U2 | pago = "telmexmexicogate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001)
zaf_hary@yahoo.com.mx:guapaa | pago = "hubgate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
si_pago@yahoo.com.mx:silupa | BY:  = (@LORDMICRO001) 
vallesbros@yahoo.com.mx:210870 | pago = "telmexmexicogate" | tipo_usuario = CMXNOVIP | region_usuario = mexico | BY:  = (@LORDMICRO001) 
pago_viejo@yahoo.com.ar:gubake | BY:  = (@LORDMICRO001) 
maxizalo@yahoo.com.ar:apagon | BY:  = (@LORDMICRO001) 
antiguobenz@yahoo.com.ar:pagoda | BY:  = (@LORDMICRO001) 
asslorenzo@yahoo.com.ar:galapago | BY:  = (@LORDMICRO001) 
relampago54@yahoo.com.ar:virginia54 | BY:  = (@LORDMICRO001) 
dpagonza@yahoo.com.ar:matias | BY:  = (@LORDMICRO001) 
signos38@yahoo.com.ar:galapagos | BY:  = (@LORDMICRO001) 
paolacimas@yahoo.com.ar:relampago | BY:  = (@LORDMICRO001) 
argen_herrera@yahoo.com.ar:mataderos | pago = "hubgate" | tipo_usuario = CARNOVIP | region_usuario = argentina | BY:  = (@LORDMICRO001) 
lorena_montesano@yahoo.com.ar:galapagos | BY:  = (@LORDMICRO001) 
pago_viejo@yahoo.com.ar:gubake | BY:  = (@LORDMICRO001) 
maxizalo@yahoo.com.ar:apagon | BY:  = (@LORDMICRO001) 
antiguobenz@yahoo.com.ar:pagoda | BY:  = (@LORDMICRO001) 
asslorenzo@yahoo.com.ar:galapago | BY:  = (@LORDMICRO001) 
relampago54@yahoo.com.ar:virginia54 | BY:  = (@LORDMICRO001) 
dpagonza@yahoo.com.ar:matias | BY:  = (@LORDMICRO001) 
signos38@yahoo.com.ar:galapagos | BY:  = (@LORDMICRO001) 
paolacimas@yahoo.com.ar:relampago | BY:  = (@LORDMICRO001) 
argen_herrera@yahoo.com.ar:mataderos | pago = "hubgate" | tipo_usuario = CARNOVIP | region_usuario = argentina | BY:  = (@LORDMICRO001) 
lorena_montesano@yahoo.com.ar:galapagos | BY:  = (@LORDMICRO001)

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
handler.command = /^(clarovideo|\?)$/i
handler.fail = null
module.exports = handler
