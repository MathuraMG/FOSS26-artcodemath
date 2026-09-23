let x, y;
let size, choice;
function setup() {
  createCanvas(400, 400);
  size = 50;
  frameRate(2);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  noStroke();
  for (x = 0; x < width; x += size) {
    for (y = 0; y < height; y += size) {
      choice = random(0, 1);
      fill(255 - x, y, x, random(50, 200));
      if (choice < 0.25) {
        arc(x, y, size * 2, size * 2, 0, 90);
      } else if (choice < 0.5) {
        arc(x + size, y, size * 2, size * 2, 90, 180);
      } else if (choice < 0.75) {
        arc(x + size, y + size, size * 2, size * 2, 180, 270);
      } else {
        arc(x, y + size, size * 2, size * 2, 270, 360);
      }
    }
  }
}
function keyPressed() {
  if (key == "s") {
    saveCanvas("arc-10print.png");
  }
  if (key == "g") {
    saveGif("arc-10print.gif", 5);
  }
}
