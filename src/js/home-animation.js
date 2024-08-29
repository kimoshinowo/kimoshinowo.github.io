var id = null;

var elem = document.getElementById("shape");
var screenHeight = document.getElementById("homescreen").offsetHeight;
var screenWidth = document.getElementById("homescreen").offsetWidth;

var yPos = getRndInteger(1, screenHeight);
var xPos = getRndInteger(1, screenWidth);

yDir = getRndInteger(0, 2) - 1;
xDir = getRndInteger(0, 2) - 1;

clearInterval(id);
id = setInterval(frame, 10);

function frame() {
    if (((yPos - 200) == screenHeight) || ((xPos - 200) == screenWidth)) {
        // yPos = 0;
        // xPos = 0;
        clearInterval(id);
    } else {
        yPos =+ yDir;
        xPos =+ xDir;

        elem.style.top = yPos + 'px';
        elem.style.left = xPos + 'px';
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}