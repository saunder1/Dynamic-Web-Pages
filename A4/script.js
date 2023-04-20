var backgroundMusicPlayed = false;
var explosionButtonClicked = false;
var elementsVisible = true;

document.addEventListener("click", function(event) {
    if (!backgroundMusicPlayed && !explosionButtonClicked) {
        var backgroundMusic = document.getElementById("backgroundMusic");
        backgroundMusic.play();
        backgroundMusicPlayed = true;
    }
});

document.getElementById("explosionButton").addEventListener("click", function() {
    explosionButtonClicked = true;

    var explosion = document.getElementById("explosion");
    var explosionSound = document.getElementById("explosionSound");
    var backgroundMusic = document.getElementById("backgroundMusic");
    var postExplosionMusic = document.getElementById("postExplosionMusic");

    hideElements();
    
    explosion.classList.remove("hidden");
    explosionSound.currentTime = 0;
    explosionSound.play();
    backgroundMusic.pause();

    setTimeout(function() {
        explosion.classList.add("hidden");
        randomizePositions();
        showElements();
        postExplosionMusic.play();
    }, 2000);
});

document.getElementById("muteButton").addEventListener("click", function() {
    var audios = document.querySelectorAll("audio");
    var isMuted = audios[0].muted;

    for (var i = 0; i < audios.length; i++) {
        audios[i].muted = !isMuted;
    }

    this.textContent = isMuted ? "Mute" : "Unmute";
});

function hideElements() {
    var elements = document.querySelectorAll("header, nav, main > *, footer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("hidden");
    }
}

function showElements() {
    var elements = document.querySelectorAll("header, nav, main > *, footer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hidden");
    }
}

function randomizePositions() {
    var elements = document.querySelectorAll("header, nav, main > *, footer");
    
    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        var rotation = Math.floor(Math.random() * 360);

        elem.classList.add("strewn");
        elem.style.left = x + "px";
        elem.style.top = y + "px";
        elem.style.transform = "rotate(" + rotation + "deg)";
    }
}