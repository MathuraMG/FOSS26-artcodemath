let slider;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(1,7,3,1);
  slider.position(10, 370);
  slider.size(380);
}

function draw() {
  background(0);
  let order = slider.value();
  drawCircles(width / 2, height / 2, width/2,order);
}

function drawCircles(x, y, radius,order) {
  noStroke();
  fill(255,40);
  circle(x, y, radius * 2);
  if (order > 1) {
    // drawCircle() calls itself four times.
    drawCircles(x + radius / 2, y, radius / 2, order-1);
    drawCircles(x - radius / 2, y, radius / 2, order-1);
    drawCircles(x, y + radius / 2, radius / 2, order-1);
    drawCircles(x, y - radius / 2, radius / 2, order-1);
  }
}
