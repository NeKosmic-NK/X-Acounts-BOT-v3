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

🔰💳 | Starplus| 💳🔰
            
▬▬▬▬▬▬▬|[🌟]|▬▬▬▬▬▬
rogerfrancisilva@yahoo.com.br:urameshi123456 | Plan = [Star Plus Combo Plus Monthly - BR - Web]
joaovictorsoares2011@bol.com.br:Ladjane0 | Plan = [Combo+ - BR - MERCADOLIBRE - L6 Bundle Upgrade March 2022]
ricardo.pizarro@bol.com.br:Ri478301 | Plan = [Star Plus Monthly - Google]
diego.romero@terra.com.br:nuevas1234 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 paid]
wilson-krette@uol.com.br:ju921411 | Plan = [Star Plus Monthly - BR - Web] | Payment = [BAMTECH]
marcosvmsilva@yahoo.com.br:ma120285 | Plan = [Combo+ - BR - Mercado Libre - Bundle L6 Paid Discounted] | Payment = [MERCADOLIBRE_BR]
elaine.vb@uol.com.br:a280401b | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 paid] | Payment = [MERCADOLIBRE_BR]
heliomaciel@yahoo.com.br:Athena11 | Plan = [Star Plus Combo Plus Monthly - MX - Web]
eduardosandro@yahoo.com.br:dudu280379 | Plan = [Combo+ - BR - MERCADOLIBRE - L6 Bundle Upgrade March 2022] | Payment = [MERCADOLIBRE_BR]
cbemer@uol.com.br:gabi1106 | Plan = [Combo+ - BR - MERCADOLIBRE - L6 Bundle Upgrade March 2022, Star Plus Monthly - CO - Web] | Payment = [MERCADOLIBRE_BR]
isaquecbraga@yahoo.com.br:brg81482 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 paid] | Payment = [MERCADOLIBRE_BR]
diegogodoi10@yahoo.com.br:rg86652609 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 organic] | Payment = [MERCADOLIBRE_BR]
apcouto@uol.com.br:Rg081109 | Plan = [Star Plus Combo Plus Monthly - BR - Web]
getulio@grservicoseletricos.com.br:gr108547 | Plan = [Combo+ - BR - Bradesco Bank - Standalone 6 Month Promo] | Payment = [BRADESCO_BANK_BR]
rafaschettini@yahoo.com.br:rS81rpll | Plan = [Disney Plus Combo Plus Monthly - BR - Web]
luisf_mp@ig.com.br:camila123 | Plan = [Combo+ - BR - MERCADOLIBRE - L6 Bundle Upgrade March 2022] | Payment = [MERCADOLIBRE_BR]
msantili@terra.com.br:Mls167205 | Plan = [Star Plus Combo Plus Monthly - BR - Web]
priscilanorcia@yahoo.com.br:Guilherme21 | Plan = [Star Plus Combo Plus Monthly - BR - Web]
marcirio@uol.com.br:stronzo8 | Plan = [Star Plus Monthly - BR - Web]
vitorlmf@grupociasaopaulo.com.br:123mudar | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 organic] | Payment = [MERCADOLIBRE_BR]
ericosantiago@uol.com.br:lkhyo123 | Plan = [Star Plus Monthly - Google]
jomarsantana@uol.com.br:130691js | Plan = [Disney Plus Combo Plus Monthly - BR - Web]
selwin@uol.com.br:sel1104 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 organic] | Payment = [MERCADOLIBRE_BR]
pro_rafael@uol.com.br:Soutricolor4 | Plan = [Star Plus Monthly - BR - Web]
jundimar@yahoo.com.br:Moove016 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 paid] | Payment = [MERCADOLIBRE_BR]
s-rodriegues-renato@bol.com.br:Kombi2005 | Plan = [Combo+ - BR - MERCADOLIBRE - L6 Bundle Upgrade March 2022] | Payment = [MERCADOLIBRE_BR]
kdu_kdu_kdu@yahoo.com.br:kadu1221 | Plan = [Combo+ - BR - MERCADOLIBRE - L6 Bundle Upgrade March 2022] | Payment = [MERCADOLIBRE_BR]
lcb.bueno@terra.com.br:vinilcb20 | Plan = [Combo+ - BR - Bradesco Bank - Standalone 6 Month Promo] | Payment = [BRADESCO_BANK_BR]
dulcirequeijo@uol.com.br:sa2412ra | Plan = [Star Plus Combo Plus Monthly - BR - Web]
raqueltemponi@yahoo.com.br:alfa2000 | Plan = [Star Plus Monthly - Apple]
cardoso_rmc@yahoo.com.br:Marife10 | Plan = [Star Plus Combo Plus Monthly - BR - Web] | Payment = [BAMTECH]
martin.schmidt@uol.com.br:martin66 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 organic]
nilo_oliveira88@hotmail.com.br:Yasmin09 | Plan = [Star Plus Monthly - BR - Web]
paulo.a.dossantos@hotmail.com.br:kof25862586 | Plan = [Combo+ - BR - MERCADOLIBRE - L6 Bundle Upgrade March 2022] | Payment = [MERCADOLIBRE_BR]
hildamara.belo@bol.com.br:0512tuda | Plan = [Disney Plus Combo Plus Monthly - BR - Web]
nicolau.martins@uol.com.br:nico9780 | Plan = [Star Plus Monthly - Google]
robertossilveira@uol.com.br:Sury2020 | Plan = [Combo+ - BR - Bradesco Bank - Standalone 6 Month Promo Intro] | Payment = [BRADESCO_BANK_BR]
fernandorcabral@yahoo.com.br:yogadecisne99 | Plan = [Combo+ - BR - MERCADOLIBRE - L6 Bundle Upgrade March 2022, Star Plus Monthly - Google] | Payment = [MERCADOLIBRE_BR]
arthur.paes@uol.com.br:acp1208 | Plan = [Star Plus Yearly - Google]
junior@workmedic.com.br:wm6158 | Plan = [Star Plus Monthly - Google]
jackapocalipse7@yahoo.com.br:j300503j | Plan = [Combo+ - BR - MERCADOLIBRE - L6 Bundle Upgrade March 2022] | Payment = [MERCADOLIBRE_BR]
ilanecris@yahoo.com.br:gas852180 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 organic] | Payment = [MERCADOLIBRE_BR]
conrado_fukuda_gomes@yahoo.com.br:Conrad01 | Plan = [Star Plus Monthly - BR - Web] | Payment = [BAMTECH]
carolinacoutinho@id.uff.br:carolina2601 | Plan = [Star Plus Monthly - BR - Web]
s.dias.lopes@uol.com.br:msetubmw320 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly]
gama41@uol.com.br:Vj232456 | Plan = [Star Plus Combo Plus Monthly - BR - Web]
brunovilelacunha@yahoo.com.br:bino0420 | Plan = [Star Plus Combo Plus Monthly - BR - Web]
tiagocrosso@yahoo.com.br:q1w2e3r4t5 | Plan = [Combo+ - BR - MERCADOLIBRE - L6 Bundle Upgrade March 2022] | Payment = [MERCADOLIBRE_BR]
gustavo@mudepublicidade.com.br:lost1313 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 paid] | Payment = [MERCADOLIBRE_BR]
fernandofazzio@terra.com.br:Refe14102005 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 organic] | Payment = [MERCADOLIBRE_BR]
sm.luccas@bol.com.br:defense2010 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 paid] | Payment = [MERCADOLIBRE_BR]
dbfalcao@terra.com.br:dec896 | Plan = [Sky BR - Combo - Star Premium Cohort - Migration Offer] | Payment = [SKY_BR]
emaildomiller@yahoo.com.br:03mil1974 | Plan = [Disney Plus Combo Plus Monthly - BR - Web]
sergiopva@bol.com.br:meri8402 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 paid] | Payment = [MERCADOLIBRE_BR]
edilsonventura@uol.com.br:jpsp1410 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 paid] | Payment = [MERCADOLIBRE_BR]
rosana.cruz@tokiomarine.com.br:cruz2011 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 paid] | Payment = [MERCADOLIBRE_BR]
adilsonbueno09@bol.com.br:Dias2468! | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 paid] | Payment = [MERCADOLIBRE_BR]
ds.albuquerque@uol.com.br:Derek3225 | Plan = [Disney Plus Combo Plus Monthly - BR - Web] | Payment = [BAMTECH]
ronyks@uol.com.br:Maresia12 | Plan = [Combo+ - BR - MERCADOLIBRE - Monthly - L6 organic] | Payment = [MERCADOLIBRE_BR]
maria-mesquita@uol.com.br:c1i2d3a4 | Plan = [Star Plus Combo Plus Monthly - BR - Web, Star Plus Monthly - Apple]
▬▬▬▬▬▬▬|[🌟]|▬▬▬▬▬▬
📸 | Capturas:

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
handler.command = /^(star|\?)$/i
handler.fail = null
module.exports = handler
