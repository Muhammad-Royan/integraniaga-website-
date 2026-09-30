/* ========================================================
   PT INTEGRA NIAGA KOMODITAS - INTERACTIVE UI & ENGINE
   ======================================================== */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Mobile Menu Toggle System (Fixed & Reliable)
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

    // 2. High-Performance Scroll Reveal Animation Observer
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

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Multi-Language Switcher Engine
    const langSelect = document.getElementById("lang-select");
    const mobileLangSelect = document.getElementById("mobile-lang-select");

    const translations = {
        en: {
            navHome: "HOME",
            navAbout: "ABOUT US",
            navProd: "PRODUCT",
            navPack: "PACKAGING",
            navQual: "QUALITY",
            navBlog: "BLOG",
            navCont: "CONTACT"
        },
        id: {
            navHome: "BERANDA",
            navAbout: "TENTANG KAMI",
            navProd: "PRODUK",
            navPack: "PENGEMASAN",
            navQual: "KUALITAS",
            navBlog: "BLOG",
            navCont: "KONTAK"
        }
    };

    function setLanguage(lang) {
        localStorage.setItem("pt_integra_lang", lang);
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    const savedLang = localStorage.getItem("pt_integra_lang") || "en";
    if (langSelect) langSelect.value = savedLang;
    if (mobileLangSelect) mobileLangSelect.value = savedLang;
    setLanguage(savedLang);

    [langSelect, mobileLangSelect].forEach(sel => {
        if (sel) {
            sel.addEventListener("change", (e) => {
                setLanguage(e.target.value);
                if (langSelect) langSelect.value = e.target.value;
                if (mobileLangSelect) mobileLangSelect.value = e.target.value;
            });
        }
    });
});
