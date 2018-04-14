let ship;

class character {
  constructor( _x, _y, _w, _h ) {
    this.obj = createSprite( _x, _y, _w, _h );
    this.obj.maxSpeed = 5;
    this.obj.setSpeed( 0, 0 );
    this.obj.friction = 0.01;
  }
  update() {
    this.move();
    this.obj.update();
  }
  move() {
    //Movement for character.
    //turn logic:
    if ( keyIsDown( LEFT_ARROW ) ) {
      this.obj.rotation -= 3;
    }
    if ( keyIsDown( RIGHT_ARROW ) ) {
      this.obj.rotation += 3;
    }
    //Thruster
    if ( keyIsDown( UP_ARROW ) ) {
      this.obj.addSpeed( -0.1, this.obj.rotation + 90 );
    }
  }
}

function screenWrap() {
  //Wrap the screen around for all sprites.
  for ( var i = 0; i < allSprites.length; i++ ) {
    var s = allSprites[ i ];
    if ( s.position.x < -32 ) s.position.x = width + 32;
    if ( s.position.x > width + 32 ) s.position.x = -32;
    if ( s.position.y < -32 ) s.position.y = height + 32;
    if ( s.position.y > height + 32 ) s.position.y = -32;
  }
}

var rockets = [];

function setup() {
  //initialized canvas.
  createCanvas( 800, 600 );
  //loaded sprites for ship and bullet.
  shipImage = loadImage( "/../sprites/ship.png" );
  bulletImage = loadImage( "/../sprites/bullet.png" );
  //assigned ship and | applied images.
  for ( var i = 0; i < 10; i++ ) {
    rockets[ i ] = createSprite( -10, -10, 5, 5 );
    rockets[ i ].addImage( bulletImage );
  }
  ship = new character( width / 2, height / 2, 32, 32 );
  ship.obj.addImage( shipImage );

}

function draw() {
  //general update functions.
  background( 47, 50, 59 );
  screenWrap();
  drawSprites();
  ship.update();
  if ( keyIsDown( 32 ) ) {
    var bullet = createSprite( ship.position.x, ship.position.y, 5, 5 );
    bullet.addImage( bulletImage );
    bullet.setSpeed( 10 + ship.getSpeed(), ship.rotation );
  }

  screenWrap();
}
