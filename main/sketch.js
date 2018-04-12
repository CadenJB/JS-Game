// NOTE: Game will be 2D, topdown, shooter(?), platformer(?)
// TODO: create character class.
// TODO: Decide if to use velocity or not.
class character {
  constructor( _size, _pos ) {
    this.size = _size;
    this.pos = _pos;
  }
  update() {
    this.move();
    this.clampS()
    this.show();
  }
  show() {
    ellipse( this.pos.x, this.pos.y, this.size );
  }
  move() {
    if ( keyIsDown( LEFT_ARROW ) ) {
      this.pos.x -= 5;
    }
    if ( keyIsDown( RIGHT_ARROW ) ) {
      this.pos.x += 5;
    }
    if ( keyIsDown( DOWN_ARROW ) ) {
      this.pos.y += 5;
    }
    if ( keyIsDown( UP_ARROW ) ) {
      this.pos.y -= 5;
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
      this.pos.y = height;
    }
    else if ( this.pos.y < 0 ) {
      this.pos.y = 0;
    }
    if ( this.pos.y < height ) {
      this.pos.y += 10;
    }
  }
  debug() {
    pfont
    print( "pos.x: " + this.pos.x + "\tpos.y" + this.pos.y );
  }
}

let dude;

function setup() {
  createCanvas( 500, 500 );
  dude = new character( 10, createVector( width / 2, height / 2 ) );
}


function draw() {
  background( 0 );
  dude.update();
}
