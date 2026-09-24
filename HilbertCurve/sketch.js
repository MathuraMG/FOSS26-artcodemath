let size = 350;
let slider;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  slider = createSlider(1,8,3,1);
  slider.position(10, 370);
  slider.size(380);
}

function draw() {
  background(255);
  let order = slider.value();
  translate(25,0); // this is just to keep the entire output at the center. NOT NEEDED FOR THE HILBERT CURVE
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
  strokeWeight(2);
  line(-size/n, -size/n, size/n, -size/n) // top line
  line(-(size/2-size/n), size/n, -(size/2-size/n), -size/n); // left vertical
  line((size/2-size/n), size/n, (size/2-size/n), -size/n) // right vertical
  pop();
}