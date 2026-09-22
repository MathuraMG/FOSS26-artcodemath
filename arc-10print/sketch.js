let x, y;
let size, choice;
function setup() {
  createCanvas(400, 400);
  size = 40;
  frameRate(2);
}

function draw() {
  background("MidnightBlue");

  noStroke();
  for (x = size / 2; x < 400; x += size) {
    for (y = size / 2; y < 400; y += size) {
      //ellipse(x, y, 50, 50);
      choice = random(0, 1);
      fill(255, x, y, random(80, 255));
      if (choice < 0.25) {
       arc(x - size / 2, y - size / 2, size * 2, size * 2, 0, HALF_PI);
      } else if (choice > 0.25 && choice < 0.5) {
      arc( x - size / 2, y + size / 2, size * 2,      size * 2, PI + HALF_PI,  2 * PI  );
      }
      else if (choice > 0.5 && choice < 0.75) {
        arc(
          x + size / 2,
          y + size / 2,
          size * 2,
          size * 2,
          PI,
           PI + HALF_PI
        );
      }
      else {
       arc(x + size / 2, y - size / 2, size * 2, size * 2, HALF_PI, PI);
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
