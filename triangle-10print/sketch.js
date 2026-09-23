let x, y;
let size, choice;
function setup() {
  createCanvas(400, 400);

  size = 100;
  frameRate(2);
}

function draw() {
  background("DarkOrange");

  noStroke();

  for (x = 0; x < width; x += size) {
    for (y = 0; y < height; y += size) {
      choice = random(0, 1);
      strokeWeight(random(0, 4));
      fill("midnightblue");
      if (choice > 0 && choice < 0.25) {
        triangle(x, y, x, y + size, x + size, y + size);
      } else if (choice > 0.25 && choice < 0.5) {
        triangle(x, y, x + size, y, x + size, y + size);
      } else if (choice > 0.5 && choice < 0.75) {
        triangle(x, y, x + size, y, x, y + size);
      } else {
        triangle(x + size, y + size, x + size, y, x, y + size);
      }
    }
  }
}

function keyPressed() {
  if (key == "s") {
    saveCanvas("triangle-10print.png");
  }
  if (key == "g") {
    saveGif("triangle-10print.gif", 5);
  }
}
