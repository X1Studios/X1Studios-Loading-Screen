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
// AUDIO CONTROLS
//------------------------------------------------

const music = document.getElementById("music")
const playBtn = document.getElementById("playPause")
const volume = document.getElementById("volume")

volume.value = 0.5
music.volume = 0.5

playBtn.onclick = () => {

if(music.paused){

music.play()
playBtn.src = "img/pause.png"

}else{

music.pause()
playBtn.src = "img/play.png"

}

}

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
