var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");

var x1 = Math.floor(Math.random() * canvas.width);
var y1 = Math.floor(Math.random() * canvas.height);
var x1vel = 10;
var y1vel = 10;

var x2 = Math.floor(Math.random() * canvas.width);
var y2 = Math.floor(Math.random() * canvas.height);
var x2vel = 10;
var y2vel = 10;

function draw() {
    if (x1 >= canvas.width || x1 <= 0) {
	x1vel = -x1vel;
    }

    if (y1 >= canvas.height || y1 <= 0) {
        y1vel = -y1vel;
    }

    if (x2 >= canvas.width || x2 <= 0) {
	x2vel = -x2vel;
    }

    if (y2 >= canvas.height || y2 <= 0) {
	y2vel = -y2vel;
    }
    x1 += x1vel;
    y1 += y1vel;
    x2 += x2vel;
    y2 += y2vel;

    pen.beginPath();
    pen.moveTo(x1, y1);
    pen.lineTo(x2, y2);
    pen.stroke();
    setTimeout(draw, 100);
}
