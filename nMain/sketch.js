var boxSprites = [];
var direction;
class character {
  constructor( _x, _y, _w, _h ) {
    this.guy = createSprite( _x, _y, _w, _h );
    this.guy.maxSpeed = 3;
    this.guy.setSpeed( 0, 0 );
  }
  update() {
    this.move();
    this.guy.update();
  }
  move() {
    if ( keyIsDown( LEFT_ARROW ) ) {
      this.guy.rotation -= 4;
    }
    if ( keyIsDown( RIGHT_ARROW ) ) {
      this.guy.rotation += 4;
    }
    if ( keyIsDown( DOWN_ARROW ) ) {
      this.guy.addSpeed( 2, this.guy.rotation );
    }
    if ( keyIsDown( UP_ARROW ) ) {
      this.guy.addSpeed( -2, this.guy.rotation );
    }
  }

}
var dude;

function setup() {
  createCanvas( 800, 600 );
  shipImage = loadImage( "/../sprites/ship.png" );

  dude = new character( width / 2, height / 2, 32, 32 );
  dude.guy.addImage( "normal", shipImage );
}

function draw() {
  background( 240 );
  //draw all the sprites
  drawSprites();
  dude.update();
}
