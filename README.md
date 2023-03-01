# assignment-3-Furi0usGeorgeX
assignment-3-Furi0usGeorgeX created by GitHub Classroom
This code makes the sprite bounce off the canvas boundary, as well as allowing the user to change the sprite's direction and speed with the arrow inputs.
  First, the variables required to define the position, speed, and direction of X and Y were created.
  Then in setup, those variables were defined.
  In draw, smooth movement updating was defined by the function x += speed*direction, and my sprite "drawPandy" was called.
  Then, two "if" statements were created (one each for X and Y): if the sprite hit a canvas boundary, its direction will reverse.                                             It's worth pointing out that collision with edge REVERSES direction inputs until the sprite is stopped. Sprite can get stuck in boundary, but will unstick if it's       speed gets high enough.
  Then, the function for the sprite "Pandy" is defined.
  Finally, "keyPressed" functions were defined for the four arrow keys: up decreases Y, down increases Y, left decreases X, right increases X. Refer back to line 7.
