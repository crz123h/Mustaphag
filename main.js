// Execute when the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Mustafa Jamil Store!");

    // 1. Dynamic changing text for the homepage hero section
    const heroTitle = document.querySelector(".hero .neon-text");
    if (heroTitle) {
        const phrases = [
            "The Best Store for PlayStation Games!",
            "Unbeatable Prices and Amazing Offers!",
            "Join the Gaming World Now!",
        ];
        let phraseIndex = 0;
        setInterval(() => {
            heroTitle.textContent = phrases[phraseIndex];
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }, 3000);
    }

    // 2. Interactive neon text effects
    const neonTexts = document.querySelectorAll(".neon-text");
    neonTexts.forEach((text) => {
        text.addEventListener("mouseover", () => {
            text.style.color = "#ff00ff";
            text.style.textShadow = "0 0 15px #ff00ff, 0 0 30px #ff00ff";
        });
        text.addEventListener("mouseout", () => {
            text.style.color = "#39ff14";
            text.style.textShadow = "0 0 15px #39ff14, 0 0 30px #39ff14";
        });
    });

    // 3. Automatically update the footer year
    const footerYear = document.querySelector(".footer-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // 4. Logging navigation clicks
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            console.log(`Navigating to: ${link.getAttribute("href")}`);
        });
    });

    // 5. Animated text interaction on all pages
    const animatedTexts = document.querySelectorAll(".animated-text");
    animatedTexts.forEach((text) => {
        let count = 0;
        setInterval(() => {
            count++;
            text.style.transform = `translateY(${Math.sin(count * 0.1) * 5}px)`;
        }, 50);
    });

    // 6. Scroll effects for specific elements
    const scrollElements = document.querySelectorAll(".scroll-effect");
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        scrollElements.forEach((el) => {
            if (el.getBoundingClientRect().top + window.scrollY < scrollPosition) {
                el.classList.add("visible");
            }
        });
    });
});