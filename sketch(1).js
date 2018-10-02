var circleX;//declared a variable
circleX = 0; //set a value to variable
speed = 5; //set speed

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);//set background to variable
  fill(50);//set fill
  stroke(255);//set stroke
  ellipse(circleX,height/2,50,50);//size of ellipse

  
  circleX = circleX + speed;
  
  
  if (circleX > width || circleX < 0) {
  
  speed = speed * -1;
  
  }
   function mousePressed() {//setting chage for image to change if mouse is pressed                       
    background(203);
    noStroke();
    fill(0, 0, 255);
    ellipse(circleX, height/2, 100, 100);
}
  
}