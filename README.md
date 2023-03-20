# assignment-3-Furi0usGeorgeX
assignment-3-Furi0usGeorgeX created by GitHub Classroom

Assignment 3 covers the creation of a game, using a "catcher" that travels along the bottom of the canvas.
For question 1, I decided to make my "catcher" a pirate ship. I created the sprite using the function "drawShip", and created it utilizing beginShape for the base and sails, later adding ellipses for cannons and text to denote the vessel's name: the HMS Procrastinator. I set the ship's X coordinate to mouseX, so that it follows the mouse along the X axis, while staying locked to Y 540. For extra flavor, I added a large blue rectangle for the ship to sit on to simulate the sea, with a bright yellow sun and pinkish-orange sky to display a sunset.

My next goal is question 2, in which I will make the ship change shape when the canvas is clicked. I will be making the sails drop open when clicked, and closed when the mouse is not clicked. Additionally, I would like to have moving waves and clouds, sunrays, and make the ship slowly accelerate towards the mouse.

Question 2 asks that the shape changes when the mouse is clicked. Originally I had made the sails open when the mouse was clicked, and closed when not clicked. However, I was unable to figure out how to make the ship accelerate towards the mouse when holding the mouse down. Instead, I made the ship accelerate towards a clicked point that generated a "target position" for the ship to move towards, and created an "if/else" statement that opens the sails if the ship is moving, as seen below.

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

Additional "if/else" statements were used to orient the ship (and text on the side of the ship, independently) depending on which direction it was moving. These three statements meet the requrirements of question 2.

Flavor code was added to make the scene more believeable. The "Perlin Wave" code by Daniel Shiffman was added to create the illusion of wavy ocean with a sense of depth perception. One wave code with descriptors shown below.

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
  
  A gradient code was imported from author REAS in order to create the illusion of a sunset.
  
  Finally, a movement code I created with ChatGPT (or perhaps more accurately, created by ChatGPT with my inputs). This code tells the object to accelerate towards a clicked-on point, and deccelerate when it reaches the point. Works well for slow objects such as pirate ships - fast moving objects tend to orbit or bounce around the stopping point. Link to the isolated movement code below.
  https://editor.p5js.org/Furi0usGeorgeX/sketches/iS5xBd0Ra
