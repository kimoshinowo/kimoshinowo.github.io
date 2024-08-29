var screenHeight = document.getElementById("homescreen").offsetHeight;
var screenWidth = document.getElementById("homescreen").offsetWidth;

var id1 = null;
var id2 = null;
var id3 = null;

clearInterval(id1);
clearInterval(id2);
clearInterval(id3);

let shape1 = {
    elem: document.getElementById("shape1"),
    yPos: getRndInteger(1, screenHeight - 201),
    xPos: getRndInteger(1, screenWidth - 201),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1
}

let shape2 = {
    elem: document.getElementById("shape2"),
    yPos: getRndInteger(1, screenHeight - 201),
    xPos: getRndInteger(1, screenWidth - 201),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1
}

let shape3 = {
    elem: document.getElementById("shape3"),
    yPos: getRndInteger(1, screenHeight - 201),
    xPos: getRndInteger(1, screenWidth - 201),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1
}

id1 = setInterval(frame, 10, shape1);
id2 = setInterval(frame, 10, shape2);
id3 = setInterval(frame, 10, shape3);

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
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}