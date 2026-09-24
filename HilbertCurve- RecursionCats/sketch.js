let size = 400,
  order = 4

function setup() {
  createCanvas(size, size);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  hilbertCurve(size / 2, size / 2, size, order, 0);
}

function hilbertCurve(cx, cy, size, order, angle) {
  // ellipse(-size/4,-size/4,10,10)
  // ellipse(-size/4,size/4,10,10)
  // ellipse(size/4,size/4,10,10)
  // ellipse(size/4,-size/4,10,10)
  push();
  translate(cx, cy);
  rotate(angle);

  if (order > 1) {
    hilbertCurve(-size / 4, -size / 4, size / 2, order - 1, 0);
    hilbertCurve(size / 4, -size / 4, size / 2, order - 1, 0);
    hilbertCurve(-size / 4, size / 4, size / 2, order - 1, 90);
    hilbertCurve(size / 4, size / 4, size / 2, order - 1, -90);
  }

  let n = pow(2, order + 1);

  //line(-size / n, -size / n, size / n, -size / n);
  strokeWeight(2);
  stroke(220);
  line(-(size / 2 - size / n), -size / n, -(size / 2 - size / n), size / n);
  line(size / 2 - size / n, -size / n, size / 2 - size / n, size / n);

  //line(-size/n, -size/n, size/n, -size/n);
  line(
    -size / n,
    -size / n,
    -size / n + size / (n * 2),
    -size / n + size / (n * 2)
  );
  line(
    -size / n + size / (n * 2),
    -size / n + size / (n * 2),
    size / n - size / (n * 2),
    -size / n + size / (n * 2)
  );
  line(
    size / n - size / (n * 2),
    -size / n + size / (n * 2),
    size / n,
    -size / n
  );
  // line(size/n, -size/n,size/n, size/n );
  pop();
}
