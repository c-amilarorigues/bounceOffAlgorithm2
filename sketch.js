var retFixo, retMovendo;

function setup() {
	createCanvas(1200,800);
	retFixo = createSprite(400, 100, 50, 80);
	retFixo.shapeColor = "green";
	retFixo.debug = true;
	retMovendo = createSprite(400, 800,80,30);
	retMovendo.shapeColor = "green";
	retMovendo.debug = true;
	
  retMovendo.velocityY = -5;
	retFixo.velocityY = +5;
	}
	
function draw() {
	background(0,0,0);  
	
	bounceOff(retMovendo,retFixo);
	drawSprites();
	}
	
function bounceOff(objeto1,objeto2){
	if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
	  && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2) {
	  objeto1.velocityX = objeto1.velocityX * (-1);
	  objeto2.velocityX = objeto2.velocityX * (-1);
	  }
  if (objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
	  && objeto2.y - objeto2.y < objeto2.height/2 + objeto1.height/2) {
	    objeto1.velocityY = objeto1.velocityY * (-1);
	    objeto2.velocityY = objeto2.velocityY * (-1);
	  } 
	}
