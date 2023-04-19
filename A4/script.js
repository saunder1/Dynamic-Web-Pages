var backgroundMusicPlayed = false;
var explosionButtonClicked = false;

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
    
    explosion.classList.remove("hidden");
    explosionSound.currentTime = 0;
    explosionSound.play();
    backgroundMusic.pause();

    setTimeout(function() {
        explosion.classList.add("hidden");
        randomizePositions();
        postExplosionMusic.play();
    }, 2000);
});

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
