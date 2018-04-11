class character {
  constructor( _grv, _pos, _spd, _vel, _siz ) {
    this.pos = _pos;
    this.spd = _spd;
    this.vel = _vel;
    this.grv = _grv;
    this.siz = _siz;
  }
  clamp() {
    if ( this.pos.y = height ) {
      this.pos.y = height;
      this.vel.y = 0;
    }
  }
  move() {
    //a
    if ( keyCode === 97 ) {
      this.vel.x -= this.spd;
    }

    //d
    if ( keyCode === 100 ) {
      this.vel.x += this.spd;
    }

    //s
    if ( keyCode === 87 ) {
      this.vel.y += this.spd;
    }

    //w
    if ( keyCode === 119 ) {
      this.vel.y -= this.spd;
    }

    this.pos.add( this.vel );
    this.vel.add( this.grv );
  }
  show() {
    fill( 255 );
    rect( this.pos.x, this.pos.y, this.siz, this.siz );
  }
  update() {
    this.move();
    this.clamp();
    this.show();
    this.vel.limit( 10 );
  }
}

let character1;

function setup() {
  createCanvas( 500, 500 );
  character1 = new character( createVector( 0, 1 ), createVector( width / 2, height / 2 ), 2, createVector( 0, 0 ), 10 );
}

function cV( a, b ) {
  return createVector( a, b );
}


function draw() {
  background( 200 );
  character1.update();
}
