let speedX, x, directionX, speedY, y, directionY;

function setup() {
  createCanvas(400, 400);
  speedX = 2;
  directionX = 1;
  x = width / 2;
  speedY = 2;
  directionY = 1;
  y = height / 2;
}

function draw() {
  colorMode(RGB);
  background(220);
  x += speedX * directionX;
  y += speedY * directionY;
  drawPandy(x, y, 1, 0, 100, 0);

  
  //NOTE: Collision with edge REVERSES direction inputs until the sprite is stopped. Sprite can get stuck in boundary, but will unstick if it's speed gets high enough.
  
  if (x + 10 >= width || x <= 10) {
    // check if hits the right/left
    directionX *= -1;
  }
  if (y + 10 >= height || y <= 10) {
    // check if hits top/bottom
    directionY *= -1;
  }
}

function drawPandy(x, y, size, r, g, b) {
  push();
  translate(x - 20, y - 20);
  scale(size);
  //Pandy
  fill(r, g, b);
  rect(0, 0, 40);
  fill("black");
  ellipse(30, 12, 8);
  ellipse(10, 12, 8);
  fill("white");
  ellipse(20, 23, 27);
  fill("black");
  ellipse(20, 27, 4);
  ellipse(25, 22, 7);
  ellipse(15, 22, 7);
  fill(255, 0, 0);
  ellipse(15, 22, 5);
  ellipse(25, 22, 5);
  fill(0);
  ellipse(15, 22, 5);
  ellipse(25, 22, 5);
  pop();
}

//Allows change in speed/direction
function keyPressed() {
  if (keyCode == UP_ARROW) {
    speedY -= 1;
  }
  if (keyCode == DOWN_ARROW) {
    speedY += 1;
  }
  if (keyCode == LEFT_ARROW) {
    speedX += 1;
  }
  if (keyCode == RIGHT_ARROW) {
    speedX -= 1;
  }
}
