// Fun joke button
function tellJoke() {
    let jokes = [
        "Why did the computer go to school? Because it wanted to improve its byte size!",
        "Why was the math book sad? It had too many problems.",
        "What's a programmer's favorite snack? Microchips!"
    ];

    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke").textContent = randomJoke;
}

/*
// Music player toggle
function toggleMusic() {
    let music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
*/

/*
// Get the player and playlist
const musicPlayer = document.getElementById("musicPlayer");
const musicSource = document.getElementById("musicSource");
const playlist = document.getElementById("playlist");
*/

// Change song when a new one is selected
function changeSong() {
    let select = document.getElementById("musicSelect");
    let player = document.getElementById("audioPlayer");
    let source = document.getElementById("audioSource");
    //this change song based on what user selects
    source.src = select.value;
    //Reload and play the new song
    player.load();
    player.play();
}


// Change theme color
function changeTheme() {
    let color = document.getElementById("colorPicker").value;
    document.getElementById("pages").style.backgroundColor = color;
}

/*
function changeTheme() {
    let color = document.getElementById("colorPicker").value;
    document.body.style.background = color;
} */

// Contact form simulation
function sendMessage(event) {
    event.preventDefault(); // prevent page reload
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    document.getElementById("contactResult").textContent =
        "Thanks, " + name + "! Your message has been received: " + message;
}

/*
// Rating function
let ratingOne = document.getElementById("rating1");
let yourRating = document.getElementById("ratingResult");

ratingOne.addEventListener("click",
    function () {
        yourRating.innerText = "You rated: ⭐"
    }
)
*/

function rate(emoji) {
    document.getElementById("ratingResult").innerText = "You rated: " + emoji;
}
