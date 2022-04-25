const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var arrow;
var baseimage;
var playerimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 150, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(
    355,
    playerBase.position.y - 105,
    120,
    120
  );

  arrow = new PlayerArrow(
    playerArcher.body.position.x,
    playerArcher.body.position.y,
    100,
    10
  );
}

function draw() {
  background(backgroundImg);
  playerArcher.display();
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,70,180)
  Engine.update(engine);

  if (keyCode === 32) {
     arrow.shoot(playerArcher.angle);
     //arrow.shoot(playerArcher.body.angle);
  }

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("Dummy Arqueiro", width / 2, 100);
}
