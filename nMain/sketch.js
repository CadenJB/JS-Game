var ship;
var bullets = [];

class character {
  constructor( _x, _y, _w, _h ) {
    this.obj = createSprite( _x, _y, _w, _h );
    this.obj.maxSpeed = 5;
    this.obj.setSpeed( 0, 0 );
    this.obj.friction = 0.01;
  }
  update() {
    //general update functions for character.
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
    //forward movement:
    if ( keyIsDown( UP_ARROW ) ) {
      this.obj.addSpeed( -0.1, this.obj.rotation + 90 );
    }
  }
}

class bullet {
  constuctor( _x, _y, _w, _h ) {
    this.obj = createSprite( _x, _y, _w, _h );
    this.obj.maxSpeed( 7 );
    this.obj.setSpeed( 0, 0 );
    this.obj.friction( 0 );
    this.direct = 0;
  }
  move( direct, cX, cY ) {
    //shoots the bullet in direction DIRECT from point (cX, cY).
    this.obj.position( cX, xY );
    this.obj.setSpeed( 7, direct );
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

function setup() {
  //initialized canvas.
  createCanvas( 800, 600 );
  //loaded sprites for ship and bullet.
  shipImage = loadImage( "/../sprites/ship.png" );
  bulletImage = loadImage( "/../sprites/bullet.png" );
  //assigned ship and bullets | applied images.
  ship = new character( width / 2, height / 2, 32, 32 );
  for ( var i = 0; i < 10; i++ ) {
    bullets[ i ] = new bullet( -10, -10, 5, 5 );
    bullets[ i ].addImage( bulletImage );
  }
  ship.obj.addImage( shipImage );
}

function draw() {
  //general update functions.
  background( 47, 50, 59 );
  screenWrap();
  drawSprites();
  ship.update();
  screenWrap();
}
