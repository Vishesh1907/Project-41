const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var thunder1,thunder2,thunder3,thunder4
var canvas;
var world;
var maxDrops = 100;
var thunderframe = 0;
var drop=[];
var thunder;


function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   canvas = createCanvas(1000,1000);
   umbrella = new Umbrella(200,500);
   if(frameCount%150===0){
      for(var y = 0;y<maxDrops;y++){
         drop.push(new Drop(random(0,400),random(0,400)))
      }
   }
}

   

    


function draw(){
   Engine.update(engine);
   var r = Math.round(random(1,4));
    if(frameCount%12 === 0){
       thunderframe = frameCount
       thunder = createSprite(random(10,370),random(10,30),10,30);
       switch(r){
          case 1:thunder.addImage(thunder1);
          break;
          case 2:thunder.addImage(thunder2);
          break;
          case 3:thunder.addImage(thunder3);
          break;
          case 4:thunder.addImage(thunder4);
          break;
          default:break;
       }
       thunder.scale = random(0.3,0.6)
    }
    if(thunderframe+10===frameCount&&thunder){
       thunder.destroy();
    }
    umbrella.display();
    for(var i = 0;i<maxDrops;i++){
drop[i].display();
drop[i].repostion();
    }
    drawSprites();
   }

