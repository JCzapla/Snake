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
	if(fruit.x === -1)
		fruit.initDraw();
	else
		fruit.draw();
}, 250);



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

function Snake(){
	this.x = 0;
	this.y = 0;
	this.dx = 1;
	this.dy = 0;
	
	this.update = function(){
		this.x = this.x + this.dx*scale;
		this.y = this.y + this.dy*scale;
		
	}
	this.draw = function(){
		ctx.beginPath();
		ctx.rect(this.x,this.y,scale,scale);
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

function scaleRound(a, b){
	var cords = [];
	cords[0] = Math.ceil(a/scale)*scale;
	cords[1] = Math.ceil(b/scale)*scale;
	return cords;
}