// PT Integra Niaga Komoditas - Main Application Script
​document.addEventListener("DOMContentLoaded", function () {
// 1. Mobile Menu Toggle Handler
const menuBtn = document.getElementById("menu-btn");
let mobileMenu = document.getElementById("mobile-menu");
​if (menuBtn) {
menuBtn.addEventListener("click", function () {
if (mobileMenu) {
mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
}
});
}
​// Close mobile menu when clicking outside
window.addEventListener("click", function (e) {
if (mobileMenu && menuBtn) {
if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
mobileMenu.style.display = "none";
}
}
});
​// 2. Scroll Reveal Intersection Observer for smooth animations
const revealElements = document.querySelectorAll(".reveal");
​const revealObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("active");
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.15
});
​revealElements.forEach(el => {
revealObserver.observe(el);
});
});
