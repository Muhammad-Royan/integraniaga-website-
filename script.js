/* ========================================================
   PT INTEGRA NIAGA KOMODITAS - SCRIPT INTERAKTIF & ANIMASI
   ======================================================== */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Menu Navigasi Strip 3 (Hamburger Menu)
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle("hidden");
        });
        
        window.addEventListener("click", (e) => {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add("hidden");
            }
        });
    }

    // 2. Animasi Scroll (Fade-In / Slide-Up)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
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
