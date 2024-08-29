var id = null;

var elem = document.getElementById("shape");
var screenHeight = document.getElementById("homescreen").offsetHeight;
var screenWidth = document.getElementById("homescreen").offsetWidth;

var yPos = 0;
var xPos = 0;

clearInterval(id);
id = setInterval(frame, 10);

function frame() {
    if ((yPos == screenHeight) || (xPos == screenWidth)) {
        clearInterval(id);
        yPos = 0;
        xPos = 0;
    } else {
        yPos++;
        xPos++;
        elem.style.top = yPos + 'px';
        elem.style.left = xPos + 'px';
    }
}