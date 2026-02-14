// Function to create floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.querySelector(".hearts").appendChild(heart);

    // Remove after animation
    setTimeout(() => heart.remove(), 6000);
}

// Continuous floating hearts in the background
setInterval(createHeart, 300);

// NO button: runs away
document.getElementById("noBtn").onmouseover = function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
};

// YES button: big celebration
document.getElementById("yesBtn").onclick = function() {
    // Remove buttons
    document.querySelector(".buttons").style.display = "none";

    const card = document.querySelector(".card");

    // Change card content
    card.innerHTML = `
        <img src="stephanie.jpg" alt="Stephanie" class="photo">
        <h1>Stephanie ❤️</h1>
        <h2>You said YES! 🥰</h2>
        <p>My heart is exploding with happiness! 💖💖💖</p>
    `;

    // Add big pulsing heart
    const bigHeart = document.createElement("div");
    bigHeart.classList.add("big-heart");
    bigHeart.innerHTML = "💖";
    document.body.appendChild(bigHeart);

    // Add typewriter love message
    const typeMsg = document.createElement("div");
    typeMsg.classList.add("typewriter");
    typeMsg.innerHTML = "<p>Stephanie, you just made me the happiest man alive ❤️</p>";
    card.appendChild(typeMsg);

    // Start extra floating hearts for fun
    const heartInterval = setInterval(createHeart, 200);

    // Stop hearts after 10 seconds for effect
    setTimeout(() => clearInterval(heartInterval), 10000);
};
