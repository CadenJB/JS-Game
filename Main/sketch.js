let ship;
let ships;
let rocket;
let rockets;
let asteroid;
let asteroids;

function setup() {
  createCanvas( 1000, 1000 );
  bulletImage = loadImage( "../sprites/rocket/bullet.png" );
  shipImage = loadImage( "../sprites/ship/ship/ship.png" );
  ship = createSprite( width / 2, height / 2, 32, 32 );
  ship.addImage( "normal", shipImage );
  ship.setCollider( "circle", 0, 0, 16 );
  ship.addAnimation( "thrust", "../sprites/ship/ship/ship_0.png", "../sprites/ship/ship/ship_4.png" );
  ship.addAnimation( "win", "../sprites/ship/winShip/ship0.png", "../sprites/ship/winShip/ship8.png" );
  rockets = new Group();
  ships = new Group();
  asteroids = new Group();
  ships.add( ship );
  for ( var i = 0; i < random( 10, 20 ); i++ ) {
    var ang = random( 360 );
    asteroidsL( 1, width / 2 + 1000 * cos( radians( ang ) ), height / 2 + 1000 * sin( radians( ang ) ) );
  }
}

function draw() {
  background( 22, 24, 40 );
  if ( asteroids.length === 0 ) {
    move( true );
    rocketL( 600 );
    drawSprites();
    screenWrap();
    ship.changeAnimation( "win" );
    console.log( "YEEET" );

  }
  else {
    rocketL( 1000 );
    screenWrap();
    move( false );
    asteroids.overlap( rockets, hit );
    drawSprites();
  }
  //  debug();

}

function hit( asteroid, rocket ) {
  if ( asteroid.type + 1 > 2 ) {}
  else {
    for ( var i = 0; i < random( 3, 7 ); i++ )
      asteroidsL( asteroid.type + 1, asteroid.position.x, asteroid.position.y );
  }
  rocket.remove();
  asteroid.remove();
}

function asteroidsL( type, x, y ) {
  asteroid = createSprite( x, y, 32, 32 );
  var img = loadImage( "../sprites/asteroids/asteroids_v" + type + "/asteroid_" + floor( random( 0, 3 ) ) + ".png" );
  asteroid.addImage( img );
  asteroid.setSpeed( 1, random( 360 ) );
  if ( type === 1 ) asteroid.setCollider( "circle", 0, 0, 32 );
  else if ( type === 2 ) asteroid.setCollider( "circle", 0, 0, 10 );
  asteroid.maxSpeed = 2;
  asteroid.type = type;
  asteroids.add( asteroid );
  return asteroid;
}

function move( win ) {
  ship.maxSpeed = 10;
  ship.friction = 0.03;
  ship.bounce( asteroids );
  if ( keyIsDown( UP_ARROW ) ) {
    ship.addSpeed( 1, ship.rotation - 90 );
    if ( win ) ship.changeAnimation( "win" );
    else ship.changeAnimation( "thrust" );
  }
  else if ( win ) ship.changeAnimation( "win" );
  else ship.changeAnimation( "normal" );
  if ( keyIsDown( LEFT_ARROW ) ) ship.rotation -= 6;
  if ( keyIsDown( RIGHT_ARROW ) ) ship.rotation += 6;
}

function rocketL( life ) {
  if ( keyIsDown( DOWN_ARROW ) ) {
    rocket = createSprite( ship.position.x, ship.position.y, 5, 5 );
    rocket.addImage( bulletImage );
    rocket.setSpeed( 15 + rocket.getSpeed(), ship.rotation - 90 );
    rocket.life = life;
    rocket.friction = 0.005;
    rocket.setCollider( "circle", 0, 0, 5 );
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

function debug() {
  for ( var i = 0; i < allSprites.length; i++ ) {
    allSprites[ i ].debug = true;
  }
}
