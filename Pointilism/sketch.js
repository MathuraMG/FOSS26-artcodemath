let img;

async function setup() {
  createCanvas(400, 400);
  img = await loadImage("cat1.png");
  background(0);
  angleMode(DEGREES);
}

function draw() {
  for(let i =-0;i<20;i++) { // this is just to. make it faster
    fill(255);
    noStroke();
    let x = random(0,width);
    let y = random(0,height);
    let imgColour = img.get(x,y)
    fill(imgColour[1],imgColour[0],imgColour[2]);
    ellipse(x,y,random(5,10));
  }
}