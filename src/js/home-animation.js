var screenHeight = document.getElementById("homescreen").offsetHeight;
var screenWidth = document.getElementById("homescreen").offsetWidth;


for (let i = 1; i < 4; i++) {
    var id = null;

    let shape = "shape"
    var elem = document.getElementById(shape.concat(i.toString()));
    var yPos = getRndInteger(1, screenHeight);
    var xPos = getRndInteger(1, screenWidth);

    yDir = Math.round(Math.random()) * 2 - 1;
    xDir = Math.round(Math.random()) * 2 - 1;

    clearInterval(id);
    id = setInterval(frame, 10);
}


function frame() {
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