var boxSprites = [];
var direction;

function setup() {
  createCanvas( 800, 600 );
  //create a sprite with a placeholder rectangle as visual component
  for ( var i = 0; i < 1000; i++ ) {
    boxSprites[ i ] = createSprite( random( width ), random( height ), random( 100 ), random( 100 ) );
  }
}

function draw() {
  background( 240 );
  direction += 2;
  for ( var i = 0; i < boxSprites.length; i++ ) {
    boxSprites[ i ].attractionPoint( random( 0.01, 0.1 ), mouseX, mouseY );
    boxSprites.maxSpeed = 5;
  }
  //draw all the sprites
  drawSprites();
}
