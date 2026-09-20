// PT Integra Niaga Komoditas
// Website Interaction & Animation Script

document.addEventListener("DOMContentLoaded", function () {

    // 1. Smooth page loading effect
    document.body.style.opacity = "1";

    // 2. Current year for footer (if needed)
    const year = new Date().getFullYear();
    const footerYear = document.querySelector("#year");
    if (footerYear) {
        footerYear.textContent = year;
    }

    // 3. Sticky Navbar (Menu atas berubah hijau saat digeser ke bawah)
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 4. Auto-Reveal Setup (Otomatis menambahkan efek animasi ke kotak-kotak)
    // Ini menghemat waktu agar Bapak tidak perlu mengedit HTML lagi
    const elementsToReveal = document.querySelectorAll(
        ".section-title, .intro-image, .intro-text, .advantage-card, .value-card, .spec-item, .packaging-card, .contact-item, .gallery-item, .market-item"
    );
    
    elementsToReveal.forEach((el, index) => {
        el.classList.add("reveal");
        
        // Menambahkan jeda (delay) agar munculnya bergantian dan elegan
        if (index % 3 === 1) el.classList.add("delay-1");
        if (index % 3 === 2) el.classList.add("delay-2");
    });

    // 5. Intersection Observer (Memicu animasi saat layar digeser menyentuh elemen)
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Animasi hanya berjalan satu kali agar tidak mengganggu saat digeser ke atas lagi
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Elemen muncul saat 15% bagiannya sudah masuk ke layar
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});
