

var c=document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.rect(20,20,20,20);
ctx.fillStyle = "red";
ctx.fill();

var snake = new Snake();

setInterval(function(){
console.log(c.onkeydown);
	c.onkeydown = document.getElementById("doc").style.backgroundColor = "red";
	ctx.clearRect(0, 0, c.width, c.height);
	snake.draw();
	snake.update();
	keyHandler();
}, 500);

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

function keyHandler(){
	if(c.onkeydown === 37){
		s.setD(-1,0);
	}
	if(c.onkeydown === 38){
		s.setD(0,1);
	}
	if(c.onkeydown === 39){
		s.setD(1,0);		
	}
	if(c.onkeydown === 40){
		s.setD(0,1);
	}
}