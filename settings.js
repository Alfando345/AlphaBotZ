const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'PTxW7omy',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "𝙎𝙃𝙄𝙕𝙐𝙆𝘼 𝙈𝘿" //namabot kalian
global.ownername= "𝘼𝙡𝙛𝙖𝙣𝙙𝙤" //nama kalian
global.myweb ="https://𝘼𝙡𝙛𝙖𝙣𝙙𝙤𝙏𝙖𝙣𝙫𝙖𝙣.𝙘𝙤𝙢" //bebas asal jan hapus
global.youtube = "https://youtube.com/shorts/SCa92e7MtBU?feature=share" //bebas asal jan hapus
global.github = "https://github.com/Alfando345" //bebas
global.email = "baka@wakuwaku.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6285764175824" // nomor wa kalian
global.ownernomerr = "+6282181552813" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://i.postimg.cc/L84bLpxL/menu-1.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6285764175824","6282181552813"] //ganti agar fitur owner bisa di gunakan
global.packname = '🇸 🇭 🇮 🇿 🇺 🇰 🇦 ' //sticker wm ubah
global.author = '𝙈𝘿' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '𝘿𝙤𝙣𝙚',
    admin: '𝗞𝗵𝘂𝘀𝘂𝘀 𝗔𝗱𝗺𝗶𝗻 𝗚𝗿𝗼𝘂𝗽!!!',
    botAdmin: 'hmm, kayaknya bot bukan admin deh... Coba lagi nanti kalau botnudah jadi admin :v',
    owner: '𝙆𝙝𝙪𝙨𝙪𝙨 𝙤𝙬𝙣𝙚𝙧 𝙗𝙤𝙩!!',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '𝙇𝙤𝙖𝙙𝙞𝙣𝙜, 𝙠𝙖𝙡𝙖𝙪 𝙗𝙤𝙩 𝙩𝙞𝙙𝙖𝙠 𝙢𝙚𝙧𝙚𝙨𝙥𝙤𝙣 𝙙𝙖𝙡𝙖𝙢 𝙬𝙖𝙠𝙩𝙪 𝙨𝙖𝙩𝙪 𝙝𝙖𝙧𝙞, 𝙖𝙧𝙩𝙞𝙣𝙮𝙖 𝙛𝙞𝙩𝙪𝙧 𝙚𝙧𝙧𝙤𝙧',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'HALO @user SELAMAT DATANG DI @subject JANGAN LUPA BACA DESC\n\nJASA RUN BOT GEMPY\nHARGA MURMER\nCHAT AJA WA DIBAWAH\nwa.me/6287898307350\nBOT AKTIF 24JAM\TANPA INTERNET,BOT TETEP ON'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
