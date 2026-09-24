let size = 400;
let order = 7;

function setup() {
  createCanvas(size, size);
  angleMode(DEGREES);
}

function draw() {
  background(70);
  hilbertCurve(size/2, size/2, size, order, 0);
  noLoop();
}

function hilbertCurve(cx, cy, size, order, angle) {
  push();
  translate(cx, cy);
  rotate(angle);
  
  if (order > 1) {
    hilbertCurve(-size/4, -size/4, size/2, order - 1, 0);
    hilbertCurve(size/4, -size/4, size/2, order - 1, 0);
    hilbertCurve(-size/4, size/4, size/2, order - 1, 90);
    hilbertCurve(size/4, size/4, size/2, order - 1, -90);
  }
  
  strokeWeight(2);
  stroke(255);
  
  let n = pow(2, order + 1);
  line(-size/n, -size/n, size/n, -size/n);
  line(-(size/2-size/n), -size/n, -(size/2-size/n), size/n);
  line((size/2-size/n), -size/n, (size/2-size/n), size/n);
  pop();
}