class character {
  constructor( _grv, _pos, _spd, _vel, _siz ) {
    this.pos = _pos;
    this.spd = _spd;
    this.vel = _vel;
    this.grv = _grv;
    this.siz = _siz;
  }
  move() {
    this.pos.add( this.vel );
    this.vel.add( this.grv );
  }
  show() {
    rect( this.pos.x, this.pos.y, this.pos.x + this.size, this.pos.y + this.size );
  }
  update() {
    this.move();
    this.show();
  }
}

let character1;

function setup() {
  createCanvas( windowWidth, windowHeight );
  character1 = new character( cV( 0, 2 ), cV( width / 2, height / 2 ), 2, cV( 0, 0 ), 10 );
}

function cV( a, b ) {
  return createVector( a, b );
}

function draw() {

}
