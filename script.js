// PT Integra Niaga Komoditas
// Website Interaction Script


document.addEventListener("DOMContentLoaded", function () {


    // Smooth page loading effect

    document.body.style.opacity = "1";



    // Current year for footer (if needed)

    const year = new Date().getFullYear();

    const footerYear = document.querySelector("#year");


    if (footerYear) {

        footerYear.textContent = year;

    }



});


window.addEventListener("load", function () {

    const loadingScreen = document.querySelector(".loading-screen");

    if (loadingScreen) {

        setTimeout(() => {

            loadingScreen.classList.add("hide");

        }, 1200);

    }

});
