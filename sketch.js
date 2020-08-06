const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(500, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(250, 800, 500, 10);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for (var j = 26; j < 500; j = j + 30) {
    plinko.push(new Plinko(j, 75));
  }
  for (var j = 15; j < 500 - 10; j = j + 50) {
    plinko.push(new Plinko(j, 175));
  }

}

function draw() {
  background(255, 255, 255);
  Engine.update(engine);
  ground.display()

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display()
  }

  for (var k = 0; k < plinko.length; k++) {
    plinko[k].display()
  }

  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
  }
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
}

