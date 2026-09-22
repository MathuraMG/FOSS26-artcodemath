let x, y;
let size,choice;
function setup() {
  createCanvas(400, 400);
  
  size = 20;
  frameRate(2)
}

function draw() {
  background(220);
  for (x = size / 2; x < 400; x += size) {
    for (y = size / 2; y < 400; y += size) {
     //ellipse(x, y, 50, 50);
      choice=random(0,1);
      if(choice<0.5){
      line(x-size/2,y-size/2,x+size/2,y+size/2)
        }
      else{
         line(x+size/2,y-size/2,x-size/2,y+size/2)
      }
    }
  }
}

function keyPressed() {
  if (key == "s") {
    saveCanvas("10print.png");
  }
  if (key == "g") {
    saveGif("10print.gif", 5);
  }
}
