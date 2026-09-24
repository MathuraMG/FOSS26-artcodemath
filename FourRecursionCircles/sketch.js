function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  drawCircles(width / 2, height / 2, width/2);
  noLoop();
}

function drawCircles(x, y, radius) {
  stroke(0);
  noFill();
  circle(x, y, radius * 2);
  if (radius > 16) {
    // drawCircle() calls itself four times.
    drawCircles(x + radius / 2, y, radius / 2);
    drawCircles(x - radius / 2, y, radius / 2);
    drawCircles(x, y + radius / 2, radius / 2);
    drawCircles(x, y - radius / 2, radius / 2);
  }
}
