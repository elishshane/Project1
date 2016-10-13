var dChange = 1;//diameter change per frame
var d = 60; //diameter 
var y = 400;
var x = 50;
var bChange = 0.4;// bomb boundary change per frame
var b = 130;//bomb start bounary
var slimeD = 400; //diameter of the big slime


function setup() {
   createCanvas( 800, 800 );
   
}

function draw() {
  if( !keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW) && !mouseIsPressed){
    background( 135, 191, 255);
    y = 400;
  }
  
  if( mouseIsPressed){
    fungus();
  } else if( keyIsDown(RIGHT_ARROW)){ //multiple rows (smaller)
    var g = 75; //local variable
    rainbow(y - 240, d / 2, g);
    rainbow(y - 120, d / 2, g);
    rainbow(y, d / 2, g);
    rainbow(y + 120, d / 2, g);
    rainbow(y + 240, d / 2, g);
  } else{
    rainbow( y, d, 115);
  }
  
  d = d + dChange;
  if (d > 105){  //wobbling
    dChange = -1;
  } else if( d < 60) {
    dChange = 1;
  }
  
  if( keyIsDown(UP_ARROW)){ //leaving trace
    y = y - 3;
  } else if( keyIsDown(DOWN_ARROW)){
    y = y + 3;
  }
}

function rainbow( rowY, d, gap){ //line of slime( row of ellipse)
  //rowY = y position of ellipse row
  //d = diameter of ellipse
  //gap = gap between ellipses' centers
  var i = 0; //number of loops(for colors)
  while( x < 800 ){
    stroke(color(135, 191, 255))
    if( i == 0 ){
      fill(255, 0, 0);//red
    } else if( i == 1) {
      fill(255, 165, 0);//orange
    } else if ( i == 2 ){
      fill(255, 255, 0);//yellow
    } else if ( i == 3 ) {
      fill(0, 255, 0);//green)
    } else if( i == 4 ) {
      fill( 0, 0, 255 );//blue
    } else if( i == 5 ){
      fill( 0, 0, 128);//navy
    } else if( i == 6 ){
      fill( 160, 32, 240);//purple
    }
  
    ellipse( x, rowY, d, d);
    x = x + gap;
    i = i + 1; 
    
    //number of ellipse is greater than 7  color starts with red again.
    if( i == 7 ){
      i = 0;
    }
  }
  
  x = 50;
}

function bomb(xCenter , yCenter, bound, numCir){//creating random circles in certain boudary
  //xCenter = x position of boundary
  //yCenter = y position of boundary
  //bound = boundary of circles
  //numCir == number of circles being created each frames
  fill(255);
  for(var i = 0; i < numCir; i++){
    var ranX = random(-bound, bound);
    var ranY = random(-bound, bound);
    var ranD = random(2,35);
    fill( 0, 255, 0)
    ellipse( xCenter + ranX, yCenter + ranY, ranD, ranD);
  }
}

function fungus(){
  bomb(400 , 400, b, 1);
  stroke( 135, 191, 255);
  fill(0, 255, 0);
  ellipse( 400, 400, slimeD, slimeD);
  
  slimeD = slimeD - random(1);
  if( slimeD < 0){
    slimeD = 0;
  }
  b = b + bChange;
}
function mousePressed(){//called only once when mouse is pressed, not every frame
  background(135, 191, 255);
  b = 130;
  slimeD = 400;
}
