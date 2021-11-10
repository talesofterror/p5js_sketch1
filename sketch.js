let ticker = 0;
let tickerMod = 20;
let time;

function setup() {
  createCanvas(400, 400);
  frameRate(24);
}


function draw() {
  background(0);

  fill(250, 100, 150);

  ticker++;
  time = ticker/tickerMod;

  let locX = width/2;
  let locY = height/2;
  let radius = 50;
  let angle = 0;
  let amp = 50;


  let cosX = amp * cos(angle + time);
  let sinY = amp * sin(angle + time);

  stroke(250);
  strokeWeight(2);
  circle(locX, locY, 5 * (time*10 % 5));

  stroke(250);
  strokeWeight(5);
  point(locX, locY);

  stroke(250);
  strokeWeight(2);
  circle(locX + cosX, locY + sinY, radius);
  
}
