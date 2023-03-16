function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(255, 150, 100);
  colorMode(RGB);

  //Sun
  fill(255, 250, 0);
  noStroke();
  ellipse(1150, 650, 200);

  stroke(1);
  drawShip(mouseX, 540, 1, 100, 60, 0);

  //Sea
  fill(0, 100, 150);
  rect(0, 700, 2000, 2000);
}

function drawShip(x, y, size, r, g, b) {
  push();
  translate(x, y);
  scale(size);
  fill(r, g, b);

  //Ship Body
  beginShape();
  vertex(0, 130);
  vertex(0, 140);
  vertex(20, 140);
  vertex(30, 150);
  vertex(50, 160);
  vertex(80, 170);
  vertex(160, 170);
  vertex(190, 160);
  vertex(210, 140);
  vertex(250, 130);
  vertex(250, 125);
  vertex(210, 135);
  vertex(200, 135);
  vertex(190, 140);
  vertex(160, 140);
  vertex(160, 80);
  vertex(190, 80);
  vertex(190, 75);
  vertex(160, 75);
  vertex(160, 60);
  vertex(155, 60);
  vertex(155, 75);
  vertex(125, 75);
  vertex(125, 80);
  vertex(155, 80);
  vertex(155, 140);
  vertex(100, 140);
  vertex(100, 45);
  vertex(130, 45);
  vertex(130, 40);
  vertex(100, 40);
  vertex(100, 20);
  vertex(95, 20);
  vertex(95, 40);
  vertex(65, 40);
  vertex(65, 45);
  vertex(95, 45);
  vertex(95, 140);
  vertex(80, 135);
  vertex(65, 120);
  vertex(10, 120);
  endShape(CLOSE);

  //Moniker
  fill(255);
  textFont("Georgia", 6);
  text("HMS PROCRASTINATOR", 5, 135);

  //Guns
  fill(50);
  ellipse(60, 150, 5);
  ellipse(80, 150, 5);
  ellipse(100, 150, 5);
  ellipse(120, 150, 5);
  ellipse(140, 150, 5);
  ellipse(160, 150, 5);
  ellipse(180, 150, 5);

  //Sails Open
  fill(255, 255, 245);

  //Back Sail
  beginShape();
  vertex(130, 45);
  vertex(140, 60);
  vertex(130, 85);
  vertex(60, 85);
  vertex(70, 60);
  vertex(65, 45);
  endShape(CLOSE);

  //Front Sail
  beginShape();
  vertex(190, 80);
  vertex(200, 95);
  vertex(190, 115);
  vertex(120, 115);
  vertex(130, 95);
  vertex(125, 80);
  endShape(CLOSE);

  pop();
}
