let x, y;
let size,choice;
function setup() {
  createCanvas(400, 400);
  
  size = 40;
  frameRate(2)
}

function draw() {
  background("MidnightBlue");
  
  noStroke()
  for (x = size / 2; x < 400; x += size) {
    for (y = size / 2; y < 400; y += size) {
      //ellipse(x, y, size, size);
      choice=random(0,1);
      fill(x,y,255)
      if(choice>0&&choice<0.25){
      triangle(x-size/2,y-size/2,x+size/2,y-size/2,x+size/2,y+size/2)
        }
      else if(choice>0.25&&choice<0.5){
         triangle(x-size/2,y-size/2,x+size/2,y-size/2,x-size/2,y+size/2)
      }
      else if(choice>0.5&&choice<0.75){
        triangle(x-size/2,y-size/2,x+size/2,y+size/2,x-size/2,y+size/2)
      }
      else{
       triangle(x-size/2,y+size/2,x+size/2,y-size/2,x+size/2,y+size/2)
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
