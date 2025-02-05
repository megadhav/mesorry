function showMessage() {
    document.getElementById("message").classList.remove("hidden");
}

function showReunionImage() {
    document.getElementById("reunion").classList.remove("hidden");
}


function moveButton() {
    let noBtn = document.getElementById("no-btn");

    let x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    let y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}


function startGame() {
    document.getElementById("game-container").style.display = "block";
    document.getElementById("game-btn").style.display = "none";
}


function revealDonkey() {
    document.getElementById("donkey").style.display = "block";
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}


function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


function showLongMessage() {
    document.getElementById("long-message").classList.remove("hidden");
}
