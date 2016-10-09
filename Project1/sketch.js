var dChange = 2;//diameter change per frame
var d = 60; //diameter 
var y = 400;
var x = 50;

function setup() {
   createCanvas( 800, 800 );
}

function draw() {
  if( !keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)){
    background(255);
    y = 400;
  }
  rainbow(y);
  if( mouseIsPressed){
    rainbow(y - 240);
    rainbow(y - 120);
    rainbow(y + 120);
    rainbow(y + 240);
  }
  
  d = d + dChange;
  
  if (d > 105){
    dChange = -2;
  } else if( d < 60) {
    dChange = 2;
  }
  
  if( keyIsDown(UP_ARROW)){
    y = y - 5;
  } else if( keyIsDown(DOWN_ARROW)){
    y = y + 5;
  }

}

function rainbow(rowY){
  var i = 0;
  while( x < 800 ){
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
    x = x + 115;
    i = i + 1; 
  }
  
  x = 50;
}
