const mmorpg = document.getElementById("mmorpgBtn");
const mmo = document.getElementById("mmoBtn");
const story = document.getElementById("storyBtn");
const apocalypse = document.getElementById("apocalypseBtn");
const pixel = document.getElementById("pixelBtn");
const shoouter = document.getElementById("shoouterBtn");
const detective = document.getElementById("detectiveBtn");
const fantasy = document.getElementById("fantasyBtn");
const gacha = document.getElementById("gachaBtn");
const adventure = document.getElementById("adventureBtn");

mmorpg.addEventListener("click", () => {
    let sound = new Audio("/sound/mmorpg.mp3");
    sound.play();
})

mmo.addEventListener("click", () => {
    let sound = new Audio("/sound/mmorpg.mp3");
    sound.play();
})

apocalypse.addEventListener("click", () => {
    let sound = new Audio("/sound/apocalypse.mp3");
    sound.play();
})

story.addEventListener("click", () => {
    let sound = new Audio("/sound/undertale.m4a");
    sound.play();
});

pixel.addEventListener("click", () => {
    let sound = new Audio("/sound/pixel.mp3")
    sound.play();
});

shoouter.addEventListener("click", () => {
    let sound = new Audio("/sound/shoouter.mp3")
    sound.play();
});

detective.addEventListener("click", () => {
    let sound = new Audio("/sound/detective.mp3");
    sound.play();
})

fantasy.addEventListener("click", () => {
    let sound = new Audio("/sound/fantasy.mp3");
    sound.play();
})

gacha.addEventListener("click", () => {
    let sound = new Audio("/sound/fantasy.mp3");
    sound.play();
})

adventure.addEventListener("click", () => {
    let sound = new Audio("/sound/adventure.mp3");
    sound.play();
})