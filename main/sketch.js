// NOTE: Game will be 2D, topdown, shooter(?), platformer(?)
// TODO: create character class.
class character {
  constructor( _size, _pos, _spd ) {
    this.size = _size;
    this.pos = _pos;
    this.spd = _spd;
  }
  update() {
    this.pos.x = round( this.pos.x );
    this.pos.y = round( this.pos.y );
    this.move();
    this.clampS()
    this.show();
  }
  show() {
    ellipse( this.pos.x, this.pos.y, this.size );
  }
  move() {
    if ( keyIsDown( LEFT_ARROW ) ) {
      this.pos.x -= 10;
      this.debug();
    }
    if ( keyIsDown( RIGHT_ARROW ) ) {
      this.pos.x += 10;
      this.debug();
    }
    if ( keyIsDown( DOWN_ARROW ) ) {
      this.pos.y += 10;
      this.debug();
    }
    if ( keyIsDown( UP_ARROW ) ) {
      this.pos.y -= 10;
      this.debug();
    }
  }
  clampS() {
    if ( this.pos.x > width ) {
      this.pos.x = width;
    }
    else if ( this.pos.x < 0 ) {
      this.pos.x = 0;
    }
    if ( this.pos.y > height ) {
      this.pos.y = height - 5;
      this.pos.y += 2;
    }
    else if ( this.pos.y < 0 ) {
      this.pos.y = 0;
    }
  }
  debug() {
    fill( 255 );
    print( "pos.x: " + this.pos.x + "\tpos.y: " + this.pos.y );
  }
}

let dude;

function setup() {
  createCanvas( 1300, 1000 );
  dude = new character( 10, createVector( width / 2, height / 2 ), 10 );
}


function draw() {
  background( 0 );
  dude.update();
}
