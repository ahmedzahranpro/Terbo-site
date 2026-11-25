// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    menuBtn.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// Reveal elements on scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

// Mouse interactive glow

document.addEventListener("mousemove", (event) => {

    if (document.body.classList.contains("no-motion")) return;

    const x = event.clientX;
    const y = event.clientY;

    document.documentElement.style.setProperty(
        "--mouse-x", x + "px"
    );

    document.documentElement.style.setProperty(
        "--mouse-y", y + "px"
    );

});

// Disable animations button

const motionBtn = document.getElementById("motionBtn");

motionBtn.addEventListener("click", () => {

    document.body.classList.toggle("no-motion");

    const disabled = document.body.classList.contains("no-motion");

    motionBtn.textContent = disabled
        ? "تشغيل الحركة"
        : "إيقاف الحركة";

});

// Smooth navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: document.body.classList.contains("no-motion")
                    ? "auto"
                    : "smooth"
            });
        }

    });

});