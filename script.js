// ==========================================
// PT INTEGRA NIAGA KOMODITAS - MAIN SCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // 2. Sticky Header Shadow on Scroll
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
                header.classList.remove('bg-white');
            } else {
                header.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-md');
                header.classList.add('bg-white');
            }
        });
    }

    // 3. Scroll Reveal Animation (Works smoothly on Mobile & Desktop)
    const revealElements = document.querySelectorAll('.reveal');

    const triggerReveal = () => {
        const triggerBottom = window.innerHeight * 0.92;
        revealElements.forEach((el) => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    // Gunakan IntersectionObserver + Fallback Scroll Listener agar 100% anti-gagal
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach((el) => observer.observe(el));
    }

    window.addEventListener('scroll', triggerReveal, { passive: true });
    setTimeout(triggerReveal, 100);
});
