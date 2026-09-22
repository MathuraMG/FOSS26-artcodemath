let x, y;
let size,choice;
function setup() {
  createCanvas(400, 400);
  
  size = 40;
  frameRate(2)
  angleMode(DEGREES)
}

function draw() {
  background("MidnightBlue");
  
  noStroke()
  for (x = size / 2; x < 400; x += size) {
    for (y = size / 2; y < 400; y += size) {
      //ellipse(x, y, size, size);
      choice=random(0,1);
      stroke(x,255-y,y)
      strokeWeight(14)
      noFill();
      if(choice<0.5){
      arc(x-size/2,y-size/2,size,size,0,90)
  arc(x+size/2,y+size/2,size,size,180,270)
        }
      else{
       arc(x+size/2,y-size/2,size,size,90,180)
  arc(x-size/2,y+size/2,size,size,270,0)
      }
    }
  }
}
function keyPressed() {
  if (key == "s") {
    saveCanvas("truchet-tiles.png");
  }
  if (key == "g") {
    saveGif("truchet-tiles", 5);
  }
}