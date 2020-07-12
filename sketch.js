const Engine= Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var square1;
var square2;
var square3

function setup() {
  createCanvas(800,400);
 square1=new Square(200,300,250,300);
 square2=new Square(400,400,150,200);
 square3=new Square(400,400,500,300);
 square4=new Square(650,300,250,200);
 square5=new Square(950,300,600,400);
 square6=new Square(-150,300,600,400);

  
}

function draw() {
  background("black")
  fill ("white")
 square1.display();
 square2.display();
 square3.display();
 square4.display();
 square5.display();
 square6.display();
 
}