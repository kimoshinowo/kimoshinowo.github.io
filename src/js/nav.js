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


function smoothScrollWithOffset(target) {
    var aboutSection = document.getElementById("about");
    var projectsSection = document.getElementById("projects");
    var contactSection = document.getElementById("contact");
    var aboutSectionPos = aboutSection.offsetTop;
    var projectsSectionPos = projectsSection.offsetTop;
    var contactSectionPos = contactSection.offsetTop;

    if (target == 'about') {
        var pos = aboutSectionPos;
    } else if (target == 'projects') {
        var pos = projectsSectionPos;
    } else if (target == 'contact') {
        var pos = contactSectionPos;
    }

    var scrollPos = pos - 60;

    window.scrollTo({top: scrollPos, behavior: "smooth"});
}