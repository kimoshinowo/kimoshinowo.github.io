// When the user scrolls the page, execute myFunction
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

window.onscroll = function() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("nav--stick")
    } else {
        navbar.classList.remove("nav--stick");
    }
};

var aboutSection = document.getElementById("about");
var projectsSection = document.getElementById("projects");
var contactSection = document.getElementById("contact");
var aboutSectionPos = aboutSection.offsetTop;
var projectsSectionPos = aboutSection.offsetTop;
var contactSectionPos = aboutSection.offsetTop;

function smoothScrollWithOffset(target) {
    if (target == 'about') {
        var pos = aboutSectionPos;
    } else if (target == 'projects') {
        var pos = projectsSectionPos;
    } else if (target == 'contact') {
        var pos = contactSectionPos;
    }

    var currentNavOffset = navbar.offsetTop;
    var scrollPos = (pos + 60) - currentNavOffset;

    window.scrollTo({top: scrollPos, behavior: "smooth"});
}