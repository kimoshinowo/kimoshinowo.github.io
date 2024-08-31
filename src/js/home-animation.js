var screenHeight = document.getElementById("homescreen").offsetHeight;
var screenWidth = document.getElementById("homescreen").offsetWidth;

var numLarge = 4;
var numMed = 6;
var numSmall = 14;
var numOfShapes = numLarge + numMed + numSmall;

for (let i=0; i < numOfShapes; i++) {
    var shape = document.createElement("div");
    var j = "shape";
    shape.setAttribute("id", j.concat(i));
    shape.classList.add("circle");

    if (i < numLarge) {
        shape.classList.add("circle--lg");
    } else if (i < (numMed + numLarge)) {
        shape.classList.add("circle--med");
    } else {
        shape.classList.add("circle--sml");
    }
    
    if ((i + 3) % 4 === 0) {
        shape.classList.add("circle--light");
    } else if ((i + 2) % 4 === 0) {
        shape.classList.add("circle--lighter");
    } else if ((i + 1) % 4 === 0) {
        shape.classList.add("circle--lightest");
    }
    
    const parentDiv = document.getElementById("homescreenContent").parentNode;
    const homescreenContent = document.getElementById("homescreenContent");
    
    parentDiv.insertBefore(shape, homescreenContent);
}

var j = "shape";
var shapeSizeLg = document.getElementById(j.concat(numLarge-1)).offsetHeight;
var shapeSizeMd = document.getElementById(j.concat((numMed + numLarge)-1)).offsetHeight;
var shapeSizeSm = document.getElementById(j.concat((numMed + numLarge)+1)).offsetHeight;

var ids = [];
var shapes = [];

for (let i=0; i < numOfShapes; i++) {
    var j = "shape";

    if (i < numLarge) {
        shapes.push(createShape(j.concat(i), shapeSizeLg));
    } else if (i < (numMed + numLarge)) {
        shapes.push(createShape(j.concat(i), shapeSizeMd));
    } else {
        shapes.push(createShape(j.concat(i), shapeSizeSm));
    }
    
}

for (let i=0; i < numOfShapes; i++) {
    ids[i] = null;
    clearInterval(ids[i]);
    ids[i] = setInterval(frame, 10, shapes[i]);
}

function createShape(shapeNum, shapeSize) {
    return {
        elem: document.getElementById(shapeNum),
        yPos: getRndInteger(1, screenHeight - shapeSize - 1),
        xPos: getRndInteger(1, screenWidth - shapeSize - 1),
        yDir: Math.round(Math.random()) * 2 - 1,
        xDir: Math.round(Math.random()) * 2 - 1,
        size: shapeSize
    }
}

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
