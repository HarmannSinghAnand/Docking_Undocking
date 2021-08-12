var iss,spaceCraft
var issimg,bg,spaceCraft1img,spaceCraft2img,spaceCraft3img,spaceCraft4img;
var hasDocked;
var hasDocked = false;

function preload(){
issimg = loadImage("Pictures/iss.png");
bg = loadImage("Pictures/spacebg.jpg");
spaceCraft1img = loadImage("Pictures/spacecraft1.png");
spaceCraft2img = loadImage("Pictures/spacecraft2.png");
spaceCraft3img = loadImage("Pictures/spacecraft3.png");
spaceCraft4img = loadImage("Pictures/spacecraft4.png")
}

function setup() {
iss = createSprite(330,130);
iss.addImage(issimg);
iss.scale = 0.25;

spaceCraft = createSprite(285,240);
spaceCraft.addImage(spaceCraft1img);
spaceCraft.scale = 0.15;
  
  createCanvas(800,400);

}

function draw() {
  background(bg);  

  if(!hasDocked){
spaceCraft.x = spaceCraft.x + random(-1,1);

if(keyDown("UP_ARROW")){
spaceCraft.y = spaceCraft.y -2;
}

if(keyDown("LEFT_ARROW")){
spaceCraft.addImage(spaceCraft3img)
spaceCraft.x =spaceCraft.x -2;
}

if(keyDown("RIGHT_ARROW")){
spaceCraft.addImage(spaceCraft4img)
spaceCraft.x = spaceCraft.x +2
}

if(keyDown("DOWN_ARROW")){
spaceCraft.addImage(spaceCraft2img)
}
}
if(spaceCraft.x<=(iss.x-10)&& spaceCraft.y<=(iss.y+70)){
hasDocked = true;
fill("White");
textSize(23);
text("Docking Successful Congratulations!!!",200,300)
}

  
  drawSprites();
}