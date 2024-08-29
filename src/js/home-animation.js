var id = null;

var elem = document.getElementById("shape");
var screenHeight = document.getElementById("homescreen").offsetHeight;
var screenWidth = document.getElementById("homescreen").offsetWidth;

var yPos = -200;
var xPos = -200;

clearInterval(id);
id = setInterval(frame, 10);

function frame() {
    if ((yPos == screenHeight) || (xPos == screenWidth)) {
        yPos = -200;
        xPos = -200;
    } else {
        yPos++;
        xPos++;
        elem.style.top = yPos + 'px';
        elem.style.left = xPos + 'px';
    }
}