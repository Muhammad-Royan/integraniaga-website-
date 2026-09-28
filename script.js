// PT Integra Niaga Komoditas - Main Application Script

document.addEventListener("DOMContentLoaded", function () {
    // 1. Mobile Menu Toggle Handler (Hamburger 3 Garis)
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            mobileMenu.classList.toggle("hidden");
        });

        // Close mobile menu when clicking outside
        window.addEventListener("click", function (e) {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add("hidden");
            }
        });
    }

    // 2. Sticky Navbar Scrolled Effect
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });

    // 3. Scroll Reveal Animation Setup for Smooth Fade-In Effects
    const revealElements = document.querySelectorAll(
        "section > div, .grid > div, h1, h2, h3, p, form, .advantage-card, .value-card, .spec-item, .packaging-card, .contact-item, .gallery-item, .market-item"
    );

    revealElements.forEach((el, index) => {
        el.classList.add("reveal");
        if (index % 3 === 1) el.classList.add("delay-1");
        if (index % 3 === 2) el.classList.add("delay-2");
    });

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => {
        revealObserver.observe(el);
    });
});
