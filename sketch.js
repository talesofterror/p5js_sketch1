let ticker = 0;
let tickerMod = 20;
let time;



function setup() {
  // createCanvas(400, 400);
  frameRate(24);

  let renderer = createCanvas(400, 400);
  renderer.parent("sketch");
}


function draw() {
  backgroundColor = (0);
  
  background(backgroundColor);

  fillColor = color(238, 210, 83);
  strokeColor1 = color(255, 0, 64);

  ticker++;
  time = ticker/tickerMod;
  
  let locX = width/2;
  let locY = height/2;
  let angle = 0;
  let amp = 100;
  
  let cosX = amp * cos(angle + time);
  let sinY = amp * sin(angle + time);
  
  let outerCircRad = 50;
  let outerCircCentX = locX + cosX;
  let outerCircCentY = locY + sinY;

  morphRect();

  Line();

  centerCirc();

  centerDot();

  outerCirc();
  

  function outerCirc() {
    stroke(strokeColor1);
    strokeWeight(2);
    fill(fillColor);
    circle(outerCircCentX, outerCircCentY, outerCircRad);
  }

  function centerDot() {
    stroke(strokeColor1);
    strokeWeight(5);
    fill(fillColor);
    point(locX, locY);
  }

  function centerCirc() {
    stroke(strokeColor1);
    strokeWeight(2);
    fill(fillColor);
    circle(locX, locY, cosX / 3);
  }

  function morphRect() {
    stroke(100, 100, 100);
    strokeWeight(0.2);
    fill(20, 20, 20);
    rect(locX, locY, cosX, sinY);
  }

  function Line() {
    stroke(strokeColor1);
    strokeWeight(2);
    fill(fillColor);
    line(locX, locY, locX + cosX, locY + sinY);
  }
}
