let x, y;
let size, choice;
function setup() {
  createCanvas(400, 400);

  size = 40;
  frameRate(1);
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();
}

function draw() {
  background("white");
  for (x = 0; x < width; x += size) {
    for (y = 0; y < height; y += size) {
      choice = random(0, 1);
      if (choice < 0.5) {
        arc(x, y, size, size, 0, 90);
        arc(x + size, y + size, size, size, 180, 270);
      } else {
        arc(x + size, y, size, size, 90, 180);
        arc(x, y + size, size, size, 270, 0);
      }
    }
  }
}
function keyPressed() {
  if (key == "s") {
    saveCanvas("truchet-tiles.png");
  }
  if (key == "g") {
    saveGif("truchet-tiles.gif", 5);
  }
}
