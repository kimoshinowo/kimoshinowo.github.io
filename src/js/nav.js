// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    var navbar = document.getElementById("nav");
    var sticky = navbar.offsetTop;

    if (window.scrollY >= sticky) {
        navbar.classList.add("nav--stick")
    } else {
        navbar.classList.remove("nav--stick");
    }
};
