let img;

function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO);
  capture.hide();
  background(0);
  angleMode(DEGREES);
}

function draw() {
  for(let i =-0;i<200;i++) { // this is just to. make it faster
    fill(255);
    noStroke();
    let x = random(0,width);
    let y = random(0,height);
    let imgColour = capture.get(x,y)
    fill(imgColour);
    ellipse(x,y,random(5,10));
  }
}