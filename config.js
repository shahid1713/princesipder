/*

# Base By Devorsixcore
# Shared By PAEDULZ
# Hapus sumber yatim
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['6283849947860']
global.ownMain = '6283849947860'
global.NamaOwner = 'NASS-WORKS' //gausah diganti
global.sessionName = 'session'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = 'DINZTXYZO' //ganti aj klo mau
global.author = 'DNZZ-ULTRA' //ganti aj klo mau
global.packname = '𝐒𝐏𝐈𝐃𝐄𝐑-𝐗𝐍𝐗𝐗' //ganti aj klo mau
global.domain = '' // Isi Domain Lu
global.apikey = 'ptla_F9N0OMtFjU0fbiO04EJiPUcw3XaPgMUmJZA6cAk3zt8' // Isi Apikey Plta Lu
global.capikey = 'ptlc_4SNLfuJidXDSWPx1LeIdY3TrFrcTaUcWqcJ92uORpTV' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.url1 = 'https://t.me/Musa_x0' //gausah diganti
global.url2 = 'https://t.me/Musa_x0' //gausah diganti
global.linkgc = 'https://t.me/Musa_x0'
global.delayjpm = 3500

global.mess = { // Custom Sesuka Lu
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 .',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by 𝐒𝐏𝐈𝐃𝐄𝐑-𝐗𝐍𝐗𝐗',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "⭑̤⟅̊༑ good Morning ͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏",
bbb: "🦠̂⃟꙳͙͡༑ᐧ how r u brother༑꙳͆⃟💚̺⃰",
ccc: "☠️⃟ ̊ ̥ ༚𐨁this is my location ̥ ̊ ༚👻⃰ꢵ⭑trck ͙ ꢵ ✩ ‌‌‌‌‌‌‌‌‌‌‌",
ddd: "🩸⃰͜͡⭑thanks⭑͜͡🩸⃰",
eee: "*👑༘⃰༡͜͡ⅅⅇ̄𝕧̷𝕠̤𝕣̵𝕤̊ⅈ͓߲𝕩𝕔𝕠̷̲𝕣ⅇ̈ 𑅆༏",
xxx: "► 𝐒𝐏𝐈𝐃𝐄𝐑-𝐗𝐍𝐗𝐗 - 𝚵𝐗͢𝐏𝐋𝚫͢𝐍 ◄",
sss: "‐‣ 𝐒𝐏𝐈𝐃𝐄𝐑-𝐗𝐍𝐗𝐗 - 𝒇𝒂𝒊𝒍 𝑩𝒆𝒕𝒂  ✨",
ttt: "Spider 𝖡𝖾𝗍a - #1𝗌𝗍"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})