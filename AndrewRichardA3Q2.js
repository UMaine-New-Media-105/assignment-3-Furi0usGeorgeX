let objPos,
  objVel,
  targetPos,
  accelerationRate,
  maxSpeed,
  decelerationRate,
  stoppingDistance; //Movement variables
var c1, c2; //Gradient color variables
let yoff = 0.0; // 2nd dimension of perlin noise
function setup() {
  createCanvas(1200, 800);
  //Movement variables defined
  objPos = createVector(width / 2, height / 2);
  objVel = createVector(0, 0);
  accelerationRate = 0.01;
  maxSpeed = 1;
  minSpeed = 0.01;
  decelerationRate = 0.2;
  stoppingDistance = 10;
}

//To Do: Make sun rays spin around sun; background islands?

function draw() {
  // Define colors
  c1 = color(140, 140, 255);
  c2 = color(255, 100, 100);
  setGradient(c1, c2);

  //Sun
  fill(255, 230, 0);
  noStroke();
  ellipse(1150, 650, 200);

  //Background Wave
  fill(0, 70, 120);
  beginShape();
  let xoff2 = 0; // Option #1: 2D Noise
  for (let x = 0; x <= width; x += 20) {
    // Iterate over horizontal pixels
    let y = map(noise(xoff2, yoff), 0, 1, 200, 350); // Calculate a y value according to noise
    vertex(x, y + 410); // Set the vertex
    xoff2 += 0.03; // Increment x dimension for noise
  }
  yoff += 0.003; // increment y dimension for noise
  vertex(width, height);
  vertex(1, height);
  endShape(CLOSE);

  //HMS Procrastinator
  stroke(1);
  updateObject();
  drawShip();
  noStroke();

  //Midground Wave
  fill(0, 100, 150);
  beginShape();
  let xoff = 0;
  for (let x = 0; x <= width; x += 15) {
    let y = map(noise(xoff, yoff), 0, 0.5, 285, 305);
    vertex(x, y + 395);
    xoff += 0.02;
  }
  yoff += 0;
  vertex(width, height);
  vertex(1, height);
  endShape(CLOSE);

  //Foreground Wave
  fill(0, 130, 180);
  beginShape();
  let xoff1 = 0;
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff1, yoff), 0, 1, 220, 350);
    vertex(x, y + 435);
    xoff1 += 0.03;
  }
  yoff += 0;
  vertex(width, height);
  vertex(1, height);
  endShape(CLOSE);
}

function mousePressed() {
  targetPos = createVector(mouseX, mouseY);
}
function updateObject() {
  if (targetPos) {
    let dir = p5.Vector.sub(targetPos, objPos);
    let dist = dir.mag();
    let speed = maxSpeed;

    if (dist < stoppingDistance) {
      speed = map(dist, 0, stoppingDistance, 0, maxSpeed);
    }

    if (dist > 0) {
      dir.normalize();
      objVel.add(dir.mult(accelerationRate));
      objVel.limit(speed);
    } else {
      objVel.mult(0);
    }

    if (dist < 1) {
      targetPos = undefined;
      objVel.mult(0);
    } else if (dist < stoppingDistance) {
      objVel.mult(map(dist, 0, stoppingDistance, 0, 1 - decelerationRate));
    }
  } else {
    objVel.mult(0);
  }

  objPos.add(objVel);
}

function drawShip(x, y, width, height, r, g, b) {
  push();
  translate(objPos.x, 540);
  scale(width, height);
  fill(100, 60, 0);

  //Flips the ship toward the direction it is moving
  if (targetPos > objPos) {
    scale(1, 1); //Facing right
  } else {
    scale(-1, 1); //Facing left
  }

  //Ship Body
  beginShape();
  vertex(-100, 130);
  vertex(-100, 140);
  vertex(-80, 140);
  vertex(-70, 150);
  vertex(-50, 160);
  vertex(-20, 170);
  vertex(60, 170);
  vertex(90, 160);
  vertex(110, 140);
  vertex(150, 130);
  vertex(150, 125);
  vertex(110, 135);
  vertex(100, 135);
  vertex(90, 140);
  vertex(60, 140);
  vertex(60, 80);
  vertex(90, 80);
  vertex(90, 75);
  vertex(60, 75);
  vertex(60, 60);
  vertex(55, 60);
  vertex(55, 75);
  vertex(25, 75);
  vertex(25, 80);
  vertex(55, 80);
  vertex(55, 140);
  vertex(0, 140);
  vertex(0, 45);
  vertex(30, 45);
  vertex(30, 40);
  vertex(0, 40);
  vertex(0, 20);
  vertex(-5, 20);
  vertex(-5, 40);
  vertex(-35, 40);
  vertex(-35, 45);
  vertex(-5, 45);
  vertex(-5, 140);
  vertex(-20, 135);
  vertex(-35, 120);
  vertex(-90, 120);
  endShape(CLOSE);

  //Guns
  fill(50);
  ellipse(-40, 150, 5);
  ellipse(-20, 150, 5);
  ellipse(0, 150, 5);
  ellipse(20, 150, 5);
  ellipse(40, 150, 5);
  ellipse(60, 150, 5);
  ellipse(80, 150, 5);

  if (objVel.mag() > 0.1) {
    //If the ship is moving
    //Sails Open
    fill(255, 255, 245);

    //Back Sail
    beginShape();
    vertex(30, 45);
    vertex(40, 60);
    vertex(30, 85);
    vertex(-40, 85);
    vertex(-30, 60);
    curveVertex(-35, 45);
    endShape(CLOSE);

    //Front Sail
    beginShape();
    vertex(90, 80);
    vertex(100, 95);
    vertex(90, 115);
    vertex(20, 115);
    vertex(30, 95);
    curveVertex(25, 80);
    endShape(CLOSE);
  } else {
    //Sails Closed
    fill(255, 255, 245);

    //Back Sail
    beginShape();
    vertex(30, 45);
    vertex(35, 50);
    vertex(-35, 50);
    vertex(-30, 45);
    endShape(CLOSE);

    //Front Sail
    beginShape();
    vertex(90, 80);
    vertex(95, 85);
    vertex(25, 85);
    vertex(30, 80);
    endShape(CLOSE);
  }

  //Keeps the text "HMS PROCRASTINATOR" from reversing when the ship faces left
  if (targetPos > objPos) {
    //Moniker
    scale(1, 1);
    fill(255);
    textFont("Georgia", 6);
    text("HMS PROCRASTINATOR", -95, 135);
  } else {
    scale(-1, 1);
    fill(255);
    textFont("Georgia", 6);
    text("HMS PROCRASTINATOR", 25, 135);
  }

  pop();
}

//Setup for Gradient
function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

//Gradient script by REAS (https://editor.p5js.org/REAS/sketches/S1TNUPzim)
//Wave script by Daniel Shiffman (https://p5js.org/examples/math-noise-wave.html)
//"Move to clicked point" script created by ChatGPT
