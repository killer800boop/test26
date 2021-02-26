const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine,world;

function setup() {
    createCanvas(1500,600)
    engine = Engine.create()
    world = engine.world
    
    ground1 = new ground(800,500,400,10)
    ground2 = new ground(1200,300,300,10)
    hexagon1 = new shooter(200,400,70,70)
    rope1 = new slingshot(hexagon1.body,{x:200,y:300})

    box1 = new box(800,400,50,40)
    box2 = new box(750,400,50,40)
    box3 = new box(700,400,50,40)
    box4 = new box(650,400,50,40)
    box5 = new box(850,400,50,40)
    box6 = new box(900,400,50,40)
    box7 = new box(950,400,50,40)

    box8 = new box(830,300,50,40) 
    box9 = new box(880,300,50,40)
    box10 = new box(930,300,50,40)
    box11 = new box(780,300,50,40)
    box12 = new box(730,300,50,40)
    box13 = new box(680,300,50,40)

    box14 = new box(800,200,50,40)
    box15 = new box(750,200,50,40)
    box16 = new box(700,200,50,40)
    box17 = new box(850,200,50,40)
    box18 = new box(900,200,50,40)
 
    box19 = new box(830,100,50,40)
    box20 = new box(880,100,50,40)
    box21 = new box(780,100,50,40)
    box22 = new box(730,100,50,40)
    
    box23 = new box(800,0,50,40)
    box24 = new box(850,0,50,40)
    box25 = new box(750,0,50,40)

    box26 = new box(830,-100,50,40)
    box27 = new box(780,-100,50,40)

    box28 = new box(800,-200,50,40)


    box29 = new box(1200,200,50,40)
    box30 = new box(1250,200,50,40)
    box31 = new box(1300,200,50,40)
    box32 = new box(1150,200,50,40)
    box33 = new box(1100,200,50,40)

    box34 = new box(1230,100,50,40)
    box35 = new box(1280,100,50,40)
    box36 = new box(1180,100,50,40)
    box37 = new box(1130,100,50,40)

    box38 = new box(1200,0,50,40)
    box39 = new box(1250,0,50,40)
    box40 = new box(1150,0,50,40)

    box41 = new box(1230,-100,50,40)
    box42 = new box(1180,-100,50,40)

    box43 = new box(1200,-200,50,40)

}

function draw() {
    Engine.update(engine)
    background("blue")
    textSize(20)
    fill("black")
    text("Drag and release the hexagon, to launch it towards the blocks",100,200)
    ground1.display();
    ground2.display();
    hexagon1.display();
    rope1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();

}

function mouseDragged(){
    Matter.Body.setPosition(hexagon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope1.fly()
}