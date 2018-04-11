class character {
  constructor( _grv, _pos, _spd, _vel, _siz ) {
    this.pos = _pos;
    this.spd = _spd;
    this.vel = _vel;
    this.grv = _grv;
    this.siz = _siz;
  }
  clamp() {
    print( height + "\t" + ( this.pos.y + this.siz ) );
    if ( this.pos.y + this.siz > height ) {
      this.vel.y = 0;
      this.pos.y = height - this.siz;
      print( "\ndab\n" );
    }
  }

  LSpd() {
    this.vel.x = round( this.vel.x );
    this.vel.y = round( this.vel.y );
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
      this.vel.y += 0;
    }

    //w
    if ( keyCode === 119 ) {
      this.vel.y -= this.spd;
    }

    this.pos.add( this.vel );
    //this.vel.add( this.grv );
  }
  show() {
    fill( 255 );
    rect( this.pos.x, this.pos.y, this.siz, this.siz );
  }
  update() {
    stroke( 100 );
    fill( 0 );
    text( "Vel.x: " + ( this.vel.x ) + "\tVel.y:  " + ( this.vel.y ), this.pos.x, this.pos.y );
    this.LSpd();
    this.move();
    this.clamp();
    this.show();
    this.vel.limit( 10 );
  }
}

let character1;

function setup() {
  createCanvas( 500, 500 );
  character1 = new character( cV( 0, 0 ), cV( width / 2, height / 2 ), 0.5, cV( 0, 0 ), 10 );
}

function cV( a, b ) {
  return createVector( a, b );
}


function draw() {
  background( 200 );
  character1.update();
}
