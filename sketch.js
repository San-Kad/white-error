var net, fish, coral, background, fishImg, netImg, coralImg, backgroundImg, box, health
function preload(){
  netImg = loadImage("Net.png")
  fishImg = loadImage("Weirdfish.png")
  coralImg = loadImage("Coral.png")
  backgroundImg = loadImage("background.png")
  
}
function setup() {
  createCanvas(800,400);
  
 background1 = createSprite(400, 200, 800, 400)
 background1.addImage(backgroundImg)
 background1.scale = 2
 background1.velocityX = -5
 net = createSprite(50,220)
 net.scale = 0.2
 net.addImage(netImg)
 fish = createSprite(120,350)
 fish.addImage(fishImg)
 fish.scale = 0.1
 coral = createSprite(400,150,100,40)
 coral.rotation = 270
 coral.scale = 0.5
 coral.addImage(coralImg)
 ib1 = createSprite(0, 200, 10, 400)
 ib1.visible = false
 ib2 = createSprite(800, 200, 10, 400)
 ib2.visible = false
 ib3 = createSprite(400, 5,800,10)
 ib3.visible = false
 ib4 = createSprite(400, 395, 800, 10)
 ib4.visible = false
 health = 100
  // createSprite(400, 200, 50, 50);
}


function draw() {
  playerControls()
  play()
  
  if (fish.isTouching(ib1)){
    fish.x = fish.x + 5
    fish.y = fish.y
  }
  if (fish.isTouching(ib2)) {
    fish.x = fish.x -5
    fish.y = fish.y
  }
  if (fish.isTouching(ib3)){
    fish.x = fish.x 
    fish.y = fish + 5
  }
  if (fish.isTouching(ib4) ){
    fish.x = fish.x+5
    fish.y = fish.y
  }

  // if (fish.isTouching(coral)){
  //   health -= 5
  // }
  
}
function playerControls() {
  if (keyIsDown(UP_ARROW)) {
    fish.y -= 5
  }

  if (keyIsDown(DOWN_ARROW)) {
    fish.y += 5
  }

  if (keyIsDown(LEFT_ARROW)) {
    fish.x -= 5
  }

  if (keyIsDown(RIGHT_ARROW)) {
    fish.x += 5
  }

  
}

function play(){
  if(background1.x < 0){
    background1.x = 1600
  }
}