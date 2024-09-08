// When the user scrolls the page, execute myFunction
var navbar = document.getElementById("nav");
var sticky = navbar.previousElementSibling.offsetHeight - 60;

var aboutSection = document.getElementById("about");
var projectsSection = document.getElementById("projects");
var contactSection = document.getElementById("contact");
var aboutSectionPos = aboutSection.offsetTop - 60;
var projectsSectionPos = projectsSection.offsetTop - 60;
var contactSectionPos = contactSection.offsetTop - 60;

window.onscroll = function() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("nav--stick")
    } else {
        navbar.classList.remove("nav--stick");
    }
    
    var navAbt = document.getElementById("navAbt");
    var navProj = document.getElementById("navProj");
    var navCont = document.getElementById("navCont");

    if (window.scrollY >= aboutSectionPos && window.scrollY < projectsSectionPos) {
        navAbt.classList.add("nav__item--active");
        navProj.classList.remove("nav__item--active");
        navCont.classList.remove("nav__item--active");
    } 
    
    if (window.scrollY >= projectsSectionPos && window.scrollY < contactSectionPos) {
        navAbt.classList.remove("nav__item--active");
        navProj.classList.add("nav__item--active");
        navCont.classList.remove("nav__item--active");
    }
    
    if (window.scrollY >= contactSectionPos) {
        navAbt.classList.remove("nav__item--active");
        navProj.classList.remove("nav__item--active");
        navCont.classList.add("nav__item--active");
    }
};

function smoothScrollWithOffset(target) {
    if (target == 'about') {
        var pos = aboutSectionPos;
    } else if (target == 'projects') {
        var pos = projectsSectionPos;
    } else if (target == 'contact') {
        var pos = contactSectionPos;
    }

    window.scrollTo({top: pos, behavior: "smooth"});
}
