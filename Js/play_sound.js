const mmorpg = document.getElementById("mmorpg");
const mmo = document.getElementById("mmo");
const story = document.getElementById("story");
const apocalypse = document.getElementById("apocalypse");
const pixel = document.getElementById("pixel");
const shoouter = document.getElementById("shoouter");
const detective = document.getElementById("detective");
const fantasy = document.getElementById("fantasy");
const gacha = document.getElementById("gacha");
const adventure = document.getElementById("adventure");

mmorpg.addEventListener("change", () => {
    let label = mmorpg.closest('label');
    if (mmorpg.checked) {
        playSound("/dias-sabina/sound/mmorpg.mp3");
        label.classList.add('active');
    } else {
        label.classList.remove('active');
    }
});

mmo.addEventListener("change", () => {
    let sound = new Audio("/dias-sabina/sound/mmorpg.mp3");
    sound.play();
})

apocalypse.addEventListener("change", () => {
    let sound = new Audio("/dias-sabina/sound/apocalypse.mp3");
    sound.play();
})

story.addEventListener("change", () => {
    let sound = new Audio("/dias-sabina/sound/undertale.m4a");
    sound.play();
});

pixel.addEventListener("change", () => {
    let sound = new Audio("/dias-sabina/sound/pixel.mp3")
    sound.play();
});

shoouter.addEventListener("change", () => {
    let sound = new Audio("/dias-sabina/sound/shoouter.mp3")
    sound.play();
});

detective.addEventListener("change", () => {
    let sound = new Audio("/dias-sabina/sound/detective.mp3");
    sound.play();
})

fantasy.addEventListener("change", () => {
    let sound = new Audio("/dias-sabina/sound/fantasy.mp3");
    sound.play();
})

gacha.addEventListener("change", () => {
    let sound = new Audio("/dias-sabina/sound/fantasy.mp3");
    sound.play();
})

adventure.addEventListener("change", () => {
    let sound = new Audio("/dias-sabina/sound/adventure.mp3");
    sound.play();
})