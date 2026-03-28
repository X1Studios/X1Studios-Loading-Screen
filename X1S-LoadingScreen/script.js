//------------------------------------------------
// SERVER INFO
//------------------------------------------------

document.getElementById("serverName").innerText = Config.server.name
document.getElementById("serverDesc").innerText = Config.server.description


//------------------------------------------------
// WELCOME INFO
//------------------------------------------------

document.getElementById("welcomeTitle").innerText = Config.welcome.title
document.getElementById("welcomeDesc").innerText = Config.welcome.description


//------------------------------------------------
// STAFF LIST
//------------------------------------------------

const staffContainer = document.getElementById("staffList")

Config.staff.forEach(member => {

const div = document.createElement("div")

div.className = "staff"

div.innerHTML = `
<img src="${member.image}">
<div>
<b>${member.name}</b>
<span>${member.role}</span>
</div>
`

staffContainer.appendChild(div)

})


//------------------------------------------------
// SOCIAL LINKS
//------------------------------------------------

function openLink(url){
    window.invokeNative("openUrl", url);
}

document.getElementById("discordBtn").onclick = () => {
    openLink(Config.socials.discord)
}

document.getElementById("youtubeBtn").onclick = () => {
    openLink(Config.socials.youtube)
}

document.getElementById("websiteBtn").onclick = () => {
    openLink(Config.socials.website)
}


//------------------------------------------------
// MUSIC PLAYER SYSTEM
//------------------------------------------------

const music = document.getElementById("music")
const playBtn = document.getElementById("playPause")
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")
const volume = document.getElementById("volume")

const titleEl = document.getElementById("songTitle")
const artistEl = document.getElementById("songArtist")

let currentSong = 0

// Default volume
volume.value = 0.5
music.volume = 0.5

//------------------------------------------------
// LOAD SONG
//------------------------------------------------

function loadSong(index){

    const song = Config.music[index]

    music.src = song.file

    titleEl.innerText = song.title
    artistEl.innerText = song.artist

    music.play()
    playBtn.src = "img/pause.png"
}

// Load first song
loadSong(currentSong)

//------------------------------------------------
// NEXT SONG
//------------------------------------------------

function nextSong(){

    currentSong++

    if(currentSong >= Config.music.length){
        currentSong = 0
    }

    loadSong(currentSong)
}

//------------------------------------------------
// PREVIOUS SONG
//------------------------------------------------

function prevSong(){

    currentSong--

    if(currentSong < 0){
        currentSong = Config.music.length - 1
    }

    loadSong(currentSong)
}

// Button bindings
nextBtn.onclick = nextSong
prevBtn.onclick = prevSong

//------------------------------------------------
// AUTO NEXT
//------------------------------------------------

music.addEventListener("ended", nextSong)

//------------------------------------------------
// PLAY / PAUSE
//------------------------------------------------

playBtn.onclick = () => {

    if(music.paused){
        music.play()
        playBtn.src = "img/pause.png"
    } else {
        music.pause()
        playBtn.src = "img/play.png"
    }

}

//------------------------------------------------
// VOLUME
//------------------------------------------------

volume.oninput = () => {
    music.volume = volume.value
}


//------------------------------------------------
// LOADING TEXT
//------------------------------------------------

const texts = [

"Loading vehicle models...",
"Loading map assets...",
"Loading scripts...",
"Preparing roleplay..."

]

let i = 0

setInterval(() => {

document.getElementById("loadingText").innerText = texts[i]

i++

if(i >= texts.length){
i = 0
}

},4000)


//------------------------------------------------
// BACKGROUND SLIDESHOW
//------------------------------------------------

const background = document.getElementById("background")

let bgIndex = 0

function changeBackground(){

background.style.backgroundImage = "url('" + Config.backgrounds[bgIndex] + "')"

bgIndex++

if(bgIndex >= Config.backgrounds.length){
bgIndex = 0
}

}

changeBackground()

setInterval(changeBackground, Config.backgroundChangeTime)
