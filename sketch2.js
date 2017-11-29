
//make a text input array for the 



function setup() {
  canvas= createCanvas(windowWidth,windowHeight);

  A1 = new A1();
  A2 = new A2();
  B1 = new B1();
  B2 = new B2();
  C1 = new C1();
  C2 = new C2();
  

  }


function draw() {
  background(255);

  A1.show();
  A2.show();
  B1.show();
  B2.show();
  C1.show();
  C2.show();  //show all buttons on page 

  //ad dom element for subit button



}


class wordOptions {
  

  constructor(x,y){

    this.x=100;
    this.y= 50;

  }
 
  show(){
    textSize(20);
    textFont('Courier');
    text("wander", this.x, this.y);
  }

  clicked(x,y){

    if()

    textStyle(BOLD);

   // this.state= true

  //if this element selected then change the style of the text

  //push the length of a specific array into the global eventual array for randomisation 
  }

}

class A2 {
  //var state= false

  constructor(x,y){

    this.x=200;
    this.y= 50;

  }
 
  show(){
    textSize(30);
    textFont('Courier');
    text("rush", this.x, this.y);
  }

}

class B1 {
  //var state= false

  constructor(x,y){

    this.x=200;
    this.y= 200;

  }
 
  show(){
    textFont('Courier');
    text("wisdom", this.x, this.y);
  }

}

class B2 {
  //var state= false

  constructor(x,y){

    this.x=200;
    this.y= 200;

  }
 
  show(){
    textFont('Courier');
    text("recovery", this.x, this.y);
  }

}

class C1 {
  //var state= false

  constructor(x,y,s){

    this.x=200;
    this.y= 200;

  }
 
  show(){
    textFont('Courier');
    text("chaos", this.x, this.y);
  }

}

class C2 {
  //var state= false

  constructor(x,y,s){

    this.x=200;
    this.y= 200;

  }
 
  show(){
    textFont('Courier');
    text("perfection", this.x, this.y);
  }

}






  // function mouseClicked(){
  //   if (dist(mouseX, mouseY, x, y) < d / 2) {
  //   A1.state = !A1.state;
  // }

















 
  
