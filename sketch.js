var bg 
var cat , mouse , catImage , mouseImage 
var catwalking 
var mouseteasing , mouseimg2
var sittingcat
var mouse4 

function preload() {
    bg=loadImage("images/garden.png")
    catImage=loadImage("images/cat1.png")
    mouseImage=loadImage("images/mouse3.png")
    catwalking=loadAnimation("images/cat2.png","images/cat3.png")
    mouseteasing=loadAnimation("images/mouse2.png","images/mouse3.png")
    sittingcat=loadImage("images/cat4.png")
    mouse4=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    mouse=createSprite(200,600)
    cat=createSprite(800,600)

    cat.addImage(catImage);
    cat.scale=0.2;
    mouse.addImage(mouseImage);
    mouse.scale=0.2;

    

}

function draw() {

    background(bg);
   
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("sittingcat",sittingcat)
        cat.changeAnimation("sittingcat")
        cat.x=300;
        cat.scale=0.2;
        mouse.addAnimation("mouse4",mouse4)
        mouse.changeAnimation("mouse4")
    }

    drawSprites();

    
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseteasing",mouseteasing)
    mouse.changeAnimation("mouseteasing")
    mouse.frameDelay=25;

    cat.velocityX=-5;

    cat.addAnimation("catwalking",catwalking)
    cat.changeAnimation("catwalking")
    
}
   




  
}
