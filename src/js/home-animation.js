var screenHeight = document.getElementById("homescreen").offsetHeight;
var screenWidth = document.getElementById("homescreen").offsetWidth;

var shapeSizeLg = document.getElementById("shape1").offsetHeight;
var shapeSizeMd = document.getElementById("shape5").offsetHeight;
var shapeSizeSm = document.getElementById("shape9").offsetHeight;

// TODO - reduce all this repetition!
var id1 = null; 
var id2 = null;
var id3 = null;
var id4 = null; 
var id5 = null;
var id6 = null;
var id7 = null; 
var id8 = null;
var id9 = null;
var id10 = null; 
var id11 = null;
var id12 = null;

clearInterval(id1);
clearInterval(id2);
clearInterval(id3);
clearInterval(id4);
clearInterval(id5);
clearInterval(id6);
clearInterval(id7);
clearInterval(id8);
clearInterval(id9);
clearInterval(id10);
clearInterval(id11);
clearInterval(id12);

let shape1 = {
    elem: document.getElementById("shape1"),
    yPos: getRndInteger(1, screenHeight - shapeSizeLg - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeLg - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeLg
}

let shape2 = {
    elem: document.getElementById("shape2"),
    yPos: getRndInteger(1, screenHeight - shapeSizeLg - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeLg - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeLg
}

let shape3 = {
    elem: document.getElementById("shape3"),
    yPos: getRndInteger(1, screenHeight - shapeSizeLg - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeLg - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeLg
}

let shape4 = {
    elem: document.getElementById("shape4"),
    yPos: getRndInteger(1, screenHeight - shapeSizeLg - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeLg - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeLg
}

let shape5 = {
    elem: document.getElementById("shape5"),
    yPos: getRndInteger(1, screenHeight - shapeSizeMd - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeMd - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeMd
}

let shape6 = {
    elem: document.getElementById("shape6"),
    yPos: getRndInteger(1, screenHeight - shapeSizeMd - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeMd - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeMd
}

let shape7 = {
    elem: document.getElementById("shape7"),
    yPos: getRndInteger(1, screenHeight - shapeSizeMd - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeMd - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeMd
}

let shape8 = {
    elem: document.getElementById("shape8"),
    yPos: getRndInteger(1, screenHeight - shapeSizeMd - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeMd - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeMd
}

let shape9 = {
    elem: document.getElementById("shape9"),
    yPos: getRndInteger(1, screenHeight - shapeSizeSm - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeSm - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeSm
}

let shape10 = {
    elem: document.getElementById("shape10"),
    yPos: getRndInteger(1, screenHeight - shapeSizeSm - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeSm - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeSm
}

let shape11 = {
    elem: document.getElementById("shape11"),
    yPos: getRndInteger(1, screenHeight - shapeSizeSm - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeSm - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeSm
}

let shape12 = {
    elem: document.getElementById("shape12"),
    yPos: getRndInteger(1, screenHeight - shapeSizeSm - 1),
    xPos: getRndInteger(1, screenWidth - shapeSizeSm - 1),
    yDir: Math.round(Math.random()) * 2 - 1,
    xDir: Math.round(Math.random()) * 2 - 1,
    size: shapeSizeSm
}

id1 = setInterval(frame, 10, shape1);
id2 = setInterval(frame, 10, shape2);
id3 = setInterval(frame, 10, shape3);
id4 = setInterval(frame, 10, shape4);
id5 = setInterval(frame, 10, shape5);
id6 = setInterval(frame, 10, shape6);
id7 = setInterval(frame, 10, shape7);
id8 = setInterval(frame, 10, shape8);
id9 = setInterval(frame, 10, shape9);
id10 = setInterval(frame, 10, shape10);
id11 = setInterval(frame, 10, shape11);
id12 = setInterval(frame, 10, shape12);

function frame(shape) {
    if (((shape.yPos + shape.size) >= screenHeight) || (shape.yPos <= 0)) {
        shape.yDir = shape.yDir * (-1);
    } else if (((shape.xPos + shape.size) >= screenWidth) || (shape.xPos <= 0)) {
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