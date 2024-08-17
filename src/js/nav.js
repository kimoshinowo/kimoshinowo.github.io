// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    var navbar = document.getElementById("nav");

    if (window.scrollY >= navbar.offsetTop) {
        navbar.classList.add("nav--stick")
    } else {
        navbar.classList.remove("nav--stick");
    }
};
