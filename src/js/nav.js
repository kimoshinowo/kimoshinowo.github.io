// When the user scrolls the page, execute myFunction
var navbar = document.getElementById("nav");
const sticky = navbar.offsetTop;

window.onscroll = function() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("nav--stick")
    } else {
        navbar.classList.remove("nav--stick");
    }
};
