var boxSprites = [];

class character {
  constructor( _x, _y, _w, _h ) {
    this.guy = createSprite( _x, _y, _w, _h );
    this.guy.maxSpeed = 5;
    this.guy.setSpeed( 0, 0 );
    this.guy.friction = 0.01;
  }
  update() {
    this.move();
    this.guy.update();
  }
  move() {
    if ( keyIsDown( LEFT_ARROW ) ) {
      this.guy.rotation -= 3;
    }
    if ( keyIsDown( RIGHT_ARROW ) ) {
      this.guy.rotation += 3;
    }
    if ( keyIsDown( UP_ARROW ) ) {
      this.guy.addSpeed( -0.1, this.guy.rotation + 90 );
    }
  }

}
var dude;

function screenWrap() {
  if ( dude.guy.position.x > width + 32 ) {
    dude.guy.position.x = -32;
  }
  if ( dude.guy.position.y > height ) {
    dude.guy.position.y = -32;
  }
  if ( dude.guy.position.x < -32 ) {
    dude.guy.position.x = width / 2;
  }
  if ( dude.guy.position.y < -32 ) {
    dude.guy.position.y = height;
  }
}

function setup() {
  createCanvas( 800, 600 );
  shipImage = loadImage( "/../sprites/ship.png" );
  dude = new character( width / 2, height / 2, 32, 32 );
  dude.guy.addImage( "normal", shipImage );
}

function draw() {
  background( 47, 50, 59 );
  screenWrap();
  drawSprites();
  dude.update();
}
