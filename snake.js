var scale = 20;

var c=document.getElementById("myCanvas");
var ctx = c.getContext("2d");
window.addEventListener('keydown',this.keyHandler,false);


var snake = new Snake();
var fruit = new Fruit();

setInterval(function(){
	ctx.clearRect(0, 0, c.width, c.height);
	snake.draw();
	snake.update();
	collsion();
	if(fruit.x === -1)
		fruit.initDraw();
	else
		fruit.draw();
}, 250);

function collsion(){
	if(snake.head.x === fruit.x && snake.head.y === fruit.y){
		snake.length++;
		if(snake.dx === 1){
			var newPart = new snakePart();
			newPart.x = snake.tail.x + (-snake.dx)*scale;
			newPart.y = snake.tail.y + (-snake.dy)*scale;
			snake.wholeSnake.push(newPart);
			snake.tail = newPart;
			fruit.x = -1;
			fruit.y = -1
		}
		else if(snake.dx === -1){
			var newPart = new snakePart();
			newPart.x = snake.tail.x + snake.dx*scale;
			newPart.y = snake.tail.y + snake.dy*scale;
			snake.wholeSnake.push(newPart);
			snake.tail = newPart;	
			fruit.x = -1;
			fruit.y = -1
		}
		else if(snake.dy === -1){
			var newPart = new snakePart();
			newPart.x = snake.tail.x + snake.dx*scale;
			newPart.y = snake.tail.y + snake.dy*scale;
			snake.wholeSnake.push(newPart);
			snake.tail = newPart;	
			fruit.x = -1;
			fruit.y = -1
		}else if(snake.dx === 1){
			var newPart = new snakePart();
			newPart.x = snake.tail.x + snake.dx*scale;
			newPart.y = snake.tail.y + snake.dy*scale;
			snake.wholeSnake.push(newPart);
			snake.tail = newPart;
			fruit.x = -1;
			fruit.y = -1
		}
		else if(snake.dy === 1){
			var newPart = new snakePart();
			newPart.x = snake.tail.x + snake.dx*scale;
			newPart.y = snake.tail.y + snake.dy*scale;
			snake.wholeSnake.push(newPart);
			snake.tail = newPart;	
			fruit.x = -1;
			fruit.y = -1
		}
	}
}	

function Fruit(){
	this.x = -1;
	this.y = -1;
	this.cords = [this.x,this.y];

	this.initDraw = function(){
		ctx.beginPath();
		this.cords = scaleRound(Math.floor((Math.random() * c.width)), Math.floor((Math.random() * c.width)));
		this.x = this.cords[0];
		this.y = this.cords[1];
		ctx.rect(this.x,this.y,scale,scale);
		ctx.fillStyle = "red";
		ctx.fill();
	}
	
	this.draw = function(){
		ctx.beginPath();
		ctx.rect(this.x,this.y,scale,scale);
		ctx.fillStyle = "red";
		ctx.fill();
	}
}

function snakePart(){
	this.x;
	this.y;
}

function Snake(){
	this.head = new snakePart();
	this.head.x = 0;
	this.head.y = 0;
	this.dx = 1;
	this.dy = 0;
	this.tail = new snakePart();
	this.tail =this.head;
	this.length = 1;
	this.wholeSnake = [this.length];
	this.wholeSnake[0] = this.head;
	
	this.update = function(){

		for(i = this.length - 1; i > 0; i--){
				this.wholeSnake[i].x = this.wholeSnake[i - 1].x;
				this.wholeSnake[i].y = this.wholeSnake[i - 1].y;
			}	
				
		this.head.x = this.head.x + this.dx*scale;
		this.head.y = this.head.y + this.dy*scale;	
	}
	
	this.draw = function(){
		for(i = 0; i < this.length; i++){
			ctx.beginPath();
			ctx.rect(this.wholeSnake[i].x,this.wholeSnake[i].y,scale,scale);
			ctx.fillStyle = "blue";
			ctx.fill();
		}
	}
	
	this.setD = function(dx,dy){
		this.dx = dx;
		this.dy = dy;
	}
}

function keyHandler(e){
	if(e.keyCode === 37){
		snake.setD(-1,0);
	}
	if(e.keyCode === 38){
		snake.setD(0,-1);
	}
	if(e.keyCode === 39){
		snake.setD(1,0);		
	}
	if(e.keyCode === 40){
		snake.setD(0,1);
	}
}

function scaleRound(a, b){
	var cords = [];
	cords[0] = Math.ceil(a/scale)*scale;
	cords[1] = Math.ceil(b/scale)*scale;
	return cords;
}