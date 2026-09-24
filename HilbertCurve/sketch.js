let size = 400;
let slider;
function setup() {
  createCanvas(size, size);
  angleMode(DEGREES);
  slider = createSlider(1,8,3,1);
  // slider.position(10, 10);
  slider.size(400);
}

function draw() {
  background(220);
  let order = slider.value();
  hilbertCurve(size/2, size/2, size,order);
}

function hilbertCurve(cX, cY, size, order,angle) {
  push();
  translate(cX, cY);
  rotate(angle);
  if(order>1) {
    hilbertCurve(-size/4, -size/4, size/2, order-1,0)
    hilbertCurve(size/4, -size/4, size/2, order - 1, 0);
    hilbertCurve(size/4, size/4, size/2, order - 1, -90);
    hilbertCurve(-size/4, size/4, size/2, order - 1, 90);
  }

  let n = pow(2,order+1);
  line(-size/n, -size/n, size/n, -size/n) // top line
  line(-(size/2-size/n), size/n, -(size/2-size/n), -size/n); // left vertical
  line((size/2-size/n), size/n, (size/2-size/n), -size/n) // right vertical
  pop();
}