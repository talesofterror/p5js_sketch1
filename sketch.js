let ticker = 0;
let tickerMod = 20;
let time;



function setup() {
  createCanvas(400, 400);
  frameRate(24);
}


function draw() {
  background(0);

  fill(111, 15, 250);
  strokeColor1 = color(250);

  ticker++;
  time = ticker/tickerMod;

  let locX = width/2;
  let locY = height/2;
  let radius = 50;
  let angle = 0;
  let amp = 100;

  let cosX = amp * cos(angle + time);
  let sinY = amp * sin(angle + time);

  stroke(strokeColor1);
  strokeWeight(2);
  line(locX, locY, locX + cosX, locY + sinY);

  stroke(strokeColor1);
  strokeWeight(2);
  circle(locX, locY, cosX/3);

  stroke(strokeColor1);
  strokeWeight(5);
  point(locX, locY);

  stroke(strokeColor1);
  strokeWeight(2);
  circle(locX + cosX, locY + sinY, radius);
  
}
