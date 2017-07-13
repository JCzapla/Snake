

var c=document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.rect(20,20,20,20);
ctx.fillStyle = "red";
ctx.fill();	
window.addEventListener('keydown',this.keyHandler,false);


var snake = new Snake();

setInterval(function(){
	ctx.clearRect(0, 0, c.width, c.height);
	snake.draw();
	snake.update();
}, 15);

function Snake(){
	this.x = 60;
	this.y = 60;
	this.dx = 1;
	this.dy = 0;
	
	this.update = function(){
		this.x = this.x + this.dx;
		this.y = this.y + this.dy;
		
	}
	this.draw = function(){
		ctx.beginPath();
		ctx.rect(this.x,this.y,20,20);
		ctx.fillStyle = "blue";
		ctx.fill();
		
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