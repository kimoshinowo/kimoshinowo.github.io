var screenHeight = document.getElementById("homescreen").offsetHeight;
var screenWidth = document.getElementById("homescreen").offsetWidth;


var id1 = null;
var id2 = null;
var id3 = null;

var elem1 = document.getElementById("shape1");
var elem2 = document.getElementById("shape2");
var elem3 = document.getElementById("shape3");

var yPos1 = getRndInteger(1, screenHeight);
var xPos1 = getRndInteger(1, screenWidth);
var yPos2 = getRndInteger(1, screenHeight);
var xPos2 = getRndInteger(1, screenWidth);
var yPos3 = getRndInteger(1, screenHeight);
var xPos3 = getRndInteger(1, screenWidth);

yDir1 = Math.round(Math.random()) * 2 - 1;
xDir1 = Math.round(Math.random()) * 2 - 1;
yDir2 = Math.round(Math.random()) * 2 - 1;
xDir2 = Math.round(Math.random()) * 2 - 1;
yDir3 = Math.round(Math.random()) * 2 - 1;
xDir3 = Math.round(Math.random()) * 2 - 1;

clearInterval(id1);
clearInterval(id2);
clearInterval(id3);

id1 = setInterval(frame(elem1, yPos1, xPos1, yDir1, xDir1), 10);
id2 = setInterval(frame(elem2, yPos2, xPos2, yDir2, xDir2), 10);
id3 = setInterval(frame(elem3, yPos3, xPos3, yDir2, xDir2), 10);


function frame(yPos, xPos, yDir, xDir, elem) {
    if (((yPos + 200) >= screenHeight) || (yPos <= 0)) {
        yDir = yDir * (-1);
    } else if (((xPos + 200) >= screenWidth) || (xPos <= 0)) {
        xDir = xDir * (-1);
    }

    yPos += yDir;
    xPos += xDir;

    elem.style.top = yPos + 'px';
    elem.style.left = xPos + 'px';
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}