const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, platform, attachment;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(100,100);
    platform =new Platform();
    attachment = new Attachment(ball.body,{x:100,y:100});
}

function draw(){
    background(255)
    Engine.update(engine);
    platform.display();
    ball.display();
    attachment.display();   
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    attachment.fly();
}