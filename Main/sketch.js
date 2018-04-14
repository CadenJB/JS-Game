let ship;
let ships;
let rocket;
let rockets;

function setup() {
  createCanvas( 600, 600 );
  bulletImage = loadImage( "/../sprites/rocket/bullet.png" );
  ship = createSprite( width / 2, height / 2, 32, 32 );
  shipImage = loadImage( "/../sprites/ship/ship.png" );
  ship.addImage( "normal", shipImage );
  ship.addAnimation( "thrust", "/../sprites/ship/ship_0.png", "/../sprites/ship/ship_1.png", "/../sprites/ship/ship_2.png", "/../sprites/ship/ship_3.png"
    "/../sprites/ship/ship_4.png" );
  rockets = new Group();
  ships = new Group();
  ships.add( ship );


}

function draw() {
  background( 22, 24, 40 );
  rocketL();
  screenWrap();
  move();
  ships.overlap( rockets, );

  drawSprites();
}

function show() {

}

function move() {
  ship.maxSpeed = 5;
  ship.friction = 0.03;
  if ( keyIsDown( UP_ARROW ) ) {
    ship.addSpeed( 1, ship.rotation - 90 );
    ship.changeAnimation( "thrust" );
  }
  else ship.changeAnimation( "normal" );
  if ( keyIsDown( LEFT_ARROW ) ) ship.rotation -= 6;
  if ( keyIsDown( RIGHT_ARROW ) ) ship.rotation += 6;
}

function rocketL() {
  if ( keyWentDown( "v" ) ) {
    rocket = createSprite( ship.position.x, ship.position.y, 5, 5 );
    rocket.addImage( bulletImage );
    rocket.setSpeed( 10 + rocket.getSpeed(), ship.rotation - 90 );
    rocket.life = 50;
    rocket.friction = 0.005;
    rockets.add( rocket )
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
