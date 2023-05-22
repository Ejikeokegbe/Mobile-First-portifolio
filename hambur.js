const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function(navLink){
    navLink.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
    }
)})