var canvas;
var music;
var box1,box2,box3,box4,ball,edges




function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1 = createSprite(0,580,360,30)
    box1.shapeColor = "red"
    box2 = createSprite(295,580,200,30)
    box2.shapeColor = "green"
    box3 = createSprite(520,580,200,30)
    box3.shapeColor = "blue"
    box4 = createSprite(740,580,220,30)
    box4.shapeColor = "purple"

    ball = createSprite(random(20,750),100,40,40)
    ball.shapeColor = "white"
    ball.velocityX = 4
    ball.velocityY = 9
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edge = createEdgeSprites()
    ball.bounceOff(edge)
    //create edgeSprite
if(box1.isTouching(ball)&&ball.bounceOff(box1)){
ball.shapeColor = "red"
}
if(box2.isTouching(ball)&&ball.bounceOff(box2)){
ball.shapeColor = "green"
}
if(box3.isTouching(ball)&&ball.bounceOff(box3)){
ball.shapeColor = "blue"
}
if(box4.isTouching(ball)&&ball.bounceOff(box4)){
ball.shapeColor = "purple"
}
drawSprites()
    //add condition to check if box touching surface and make it box
}
