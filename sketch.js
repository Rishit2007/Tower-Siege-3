
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var polygon;

var score = 0;

function preload(){
imagePoly = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    

  ground1 = new Ground(400,690,800,20);
  stand1 = new Ground(475,600,250,20);

   box1 = new Box(375,575,50,50);
   box2 = new Box(425,575,50,50);
   box3 = new Box(475,575,50,50);
   box4 = new Box(525,575,50,50);
   box5 = new Box(575,575,50,50);
   box6 = new Box(425,575,50,50);
   box7 = new Box(475,575,50,50);
   box8 = new Box(525,575,50,50);
   box9 = new Box(475,575,50,50);
 

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);
    slingShot1 = new Sling(polygon,{x:100,y:550});
    
   
   Engine.run(engine);

   
}

function draw(){
  background("black");
     
  imageMode(CENTER);
  image(imagePoly,polygon.position.x,polygon.position.y,50,50);
  slingShot1.display();
  console.log(score);
  text("SCORE - "+score, 700,100);
    ground1.display();
    stand1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box1.score();
    box2.score();
    box4.score();
    box3.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();

    
    
      
  }

 function  mouseDragged()
  {
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  }

 function mouseReleased()
  {
    slingShot1.fly();
  }

  function keyPressed(){
    if(keyCode == 32){
      slingShot1.attach(polygon);
    }
  }