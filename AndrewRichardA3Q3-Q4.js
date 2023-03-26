function setup() {
  createCanvas(400, 400);
  
  //Pirate movement variables
  mateyX = random(400);
  mateyY = 50;
  mateySpeed = 3;
  mateyIsFalling = false;
}

function draw() {
  background(220);
  drawMatey(mateyX, mateyY, 1);

  //When you hit the space bar, the pirate will start falling
  if (keyCode == 32 && mateyIsFalling == false) {
    mateyIsFalling = true;
  }

  //Sets the conditions for the pirate falling
  if (mateyIsFalling == true) {
    mateyY = mateyY + mateySpeed;
  }

  //Resets the pirate's position to the top when he gets too low
  if (mateyY > 350) {
    mateyIsFalling = false;
    mateyY = 40;
    mateyX = random(400);
  }
}

  //The Pirate
function drawMatey(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  fill(255, 200, 200);
  ellipse(-15, -10, 3, 15); //LeftForearm
  ellipse(15, -10, 3, 15); //RightForearm

  fill(255, 200, 200);
  ellipse(-10, -5, 15, 5); //LeftBicep
  ellipse(10, -5, 15, 5); //RightBicep

  fill(255, 200, 200);
  ellipse(-15, -20, 5, 5); //LeftHand
  ellipse(15, -20, 5, 5); //RightHand

  fill(60, 60, 60);
  ellipse(-5, 25, 3, 15); //LeftCalf
  ellipse(5, 25, 3, 15); //RightCalf

  fill(0, 150, 200);
  ellipse(-5, 15, 6, 15); //LeftThigh
  ellipse(5, 15, 6, 15); //RightThigh

  fill(20, 20, 20);
  ellipse(-5, 35, 5, 5); //RightFoot
  ellipse(5, 35, 5, 5); //RightFoot

  fill(255, 100, 100);
  ellipse(0, 0, 10, 20); //Torso

  fill(255, 200, 200);
  ellipse(0, -10, 10, 10); //Head

  fill(0);
  ellipse(2, -11, 3); //Eyepatch
  line(-2, -15, 5, -8);
  pop();
}
