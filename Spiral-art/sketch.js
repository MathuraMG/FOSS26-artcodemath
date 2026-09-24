let img;
let r = 0;
let theta = 0;
async function setup() {
  createCanvas(400, 400);
  img = await loadImage("cat1.png");
  img.resize(400,400);
  background(255);
  angleMode(DEGREES);
}

function draw() {
  translate(width/2, height/2);
  for(let i =-0;i<40;i++) {
    fill(0);
    noStroke();
    let size = map(brightness(img.get(r*cos(theta)+width/2, r*sin(theta)+height/2)),100,0,1,8);
    ellipse(r*cos(theta), r*sin(theta),size);
    r+=0.01;
    theta+=0.5;
  }
}

