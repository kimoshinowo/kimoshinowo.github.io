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
// clearInterval(id2);
// clearInterval(id3);

let shape1 = {
    elem: document.getElementById("shape1"),
    yPos: getRndInteger(1, screenHeight),
    xPos: getRndInteger(1, screenWidth),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1
}

id1 = setInterval(frame, 10, shape1);
// id2 = setInterval(frame(elem2, yPos2, xPos2, yDir2, xDir2), 10);
// id3 = setInterval(frame(elem3, yPos3, xPos3, yDir3, xDir3), 10);

function frame(shape) {
    if (((shape.yPos + 200) >= screenHeight) || (shape.yPos <= 0)) {
        shape.yDir = shape.yDir * (-1);
    } else if (((shape.xPos + 200) >= screenWidth) || (shape.xPos <= 0)) {
        shape.xDir = shape.xDir * (-1);
    }

    shape.yPos += shape.yDir;
    shape.xPos += shape.xDir;

    shape.elem.style.top = shape.yPos + 'px';
    shape.elem.style.left = shape.xPos + 'px';

    console.log(shape.yPos);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}