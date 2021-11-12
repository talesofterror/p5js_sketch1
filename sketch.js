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
  backgroundColor = (25, 25, 25);
  
  background(backgroundColor);

  fillColor = color(0, 255, 136);
  strokeColor1 = color(250, 255, 136);

  ticker++;
  time = ticker/tickerMod;
  
  let angle = 0;
  let amp = 100;
  
  let cosX = amp * cos(angle + time);
  let sinY = amp * sin(angle + time);
  
  let locX = width/2;
  let locY = height/2;
  let outerCircRad = 50;
  let outerCircCentX = locX + cosX;
  let outerCircCentY = locY + sinY;

  let midDistX = locX + cosX/2;
  let midDistY = locY + sinY/2;

  // print("midDistX = " + midDistX);
  // print("midDistY = " + midDistY);
  
  fill(backgroundColor);
  stroke(strokeColor1);
  strokeWeight(2);
  rect(20, 20, width-40, height-40);
  
  morphRect();
  
  Line();
  
  centerCirc();
  
  centerDot();
  
  outerCirc();
  
  midCirc();

  function midCirc() {
    stroke(strokeColor1);
    strokeWeight(2);
    fill(fillColor);
    circle(midDistX, midDistY, cosX/6);
  }

  function outerCirc() {
    stroke(strokeColor1);
    strokeWeight(2);
    fill(fillColor);
    circle(outerCircCentX, outerCircCentY, outerCircRad-sinY/5);
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
    stroke(strokeColor1);
    strokeWeight(2);
    fill(backgroundColor);
    rect(locX, locY, cosX, sinY);
  }

  function Line() {
    stroke(strokeColor1);
    strokeWeight(2);
    fill(fillColor);
    line(locX, locY, outerCircCentX, outerCircCentY);
  }
}
