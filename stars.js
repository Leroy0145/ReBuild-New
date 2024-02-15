document.addEventListener("DOMContentLoaded", function() {
    const numStars = 1000; // Adjust the number of stars as needed
    const starsContainer = document.getElementById("stars-container");

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.width = Math.floor(Math.random() * 3 + 2) + "px"; // Random size between 2px and 4px
        star.style.height = star.style.width;
        star.style.top = Math.random() * 400 + "%"; // Random position between 0 and 100vh
        star.style.left = Math.random() * 100 + "%"; // Random position between 0 and 100vw
        star.style.animationDelay = Math.random() * 5 + "s"; // Random initial delay for each star
        starsContainer.appendChild(star);
    }
    
    // Trigger animation by adding 'animate' class after a delay
    setTimeout(function() {
        const stars = document.querySelectorAll(".star");
        stars.forEach(function(star) {
            star.classList.add("animate");
        });
    }, 100);
});