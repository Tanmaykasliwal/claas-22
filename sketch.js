const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var world,engine,ground,ball

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(600,400,50,50,option)
  World.add(world,ground)
  var option2={
    restitution:1.8
  }
  ball=Bodies.circle(50,50,20,option2)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}