let choice, size;
function setup() {
  createCanvas(400, 400);
  frameRate(2);
  size = 20;
}

function draw() {
  background(220);
  for (let i=0; i < width; i += size) {
    for (let j = 0; j < height; j += size) {
      choice = random(0, 1);
      if (choice < 0.5) {
        line(i, j, i+size, j+size);
      } else {
        line(i,j+size, i+size,j);
      }
    }
  }
}
