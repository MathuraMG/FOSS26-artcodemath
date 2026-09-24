let catImg;
let x, y;
let size, choice;

async function setup() {
  createCanvas(400, 400);

  catImg = await loadImage("https://cataas.com/cat?width=400&height=400");
  catImg.resize(width, 0);      

  size = 10;                          
  frameRate(2);
  angleMode(DEGREES);
}

function draw() {
  background("Black");
  noFill();

  for (x = size / 2; x < width; x += size) {
    for (y = size / 2; y < height; y += size) {

      let colour = catImg.get(x, y);   
      stroke(colour);
      strokeWeight(size * 0.3);

      choice = random(0, 1);
      if (choice < 0.5) {
        arc(x - size/2, y - size/2, size, size, 0, 90);
        arc(x + size/2, y + size/2, size, size, 180, 270);
      } else {
        arc(x + size/2, y - size/2, size, size, 90, 180);
        arc(x - size/2, y + size/2, size, size, 270, 0);
      }
    }
  }
}

function keyPressed() {
  if (key === 's') saveCanvas("truchet-trucat.jpg");
  if (key === 'g') saveGif("truchet-trucat.gif", 5);
}