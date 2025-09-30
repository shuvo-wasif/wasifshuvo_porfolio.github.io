// Simple form submit handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
});
const hero = document.querySelector('.hero-inner');
const shrinkThreshold = 100; // scroll pixels before shrinking

window.addEventListener('scroll', () => {
    if (window.scrollY > shrinkThreshold) {
        hero.classList.add('shrink');
    } else {
        hero.classList.remove('shrink');
    }
});

// Particle animation in hero section
const particlesContainer = document.querySelector('.particles');

// Generate stars
const numberOfStars = 100; 
for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('particle');

    // Random size (tiny stars)
    const size = Math.random() * 2 + 1; 
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random position
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    // Random twinkle timing
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(star);
}
// Select all nav links
const navLinks = document.querySelectorAll('nav ul li a');
const clickSound = document.getElementById('click-sound');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Play the sound
        clickSound.currentTime = 0; // restart if already playing
        clickSound.play();
    });
});
