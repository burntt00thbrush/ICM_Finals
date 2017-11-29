// hypno-comfort
// by isa vento
// november 2017
// runs on p5.js

//global variable for interactive words
//they are the texts for the buttons on screen
let interactiveWords= ["wandering?","rushing?", "wisdom", "recovery","chaos","structure"];


//global variable with trackpaths of wav files for each word
let TrackPaths0 = ["assets/QuitSmoking/Bit0.wav","assets/QuitSmoking/Bit1.wav" ,
"assets/QuitSmoking/Bit2.wav" ,"assets/QuitSmoking/Bit3.wav" ,"assets/QuitSmoking/Bit4.wav" ,
"assets/QuitSmoking/Bit5.wav" ,"assets/QuitSmoking/Bit6.wav" ,"assets/QuitSmoking/Bit7.wav" ,
"assets/QuitSmoking/Bit8.wav" ,"assets/QuitSmoking/Bit9.wav" ,"assets/QuitSmoking/Bit10.wav" ,
"assets/QuitSmoking/Bit11.wav","assets/QuitSmoking/Bit12.wav","assets/QuitSmoking/Bit13.wav",
"assets/QuitSmoking/Bit14.wav","assets/QuitSmoking/Bit15.wav","assets/QuitSmoking/Bit16.wav",
"assets/QuitSmoking/Bit17.wav"]
let TrackPaths1 = [];
let TrackPaths2 = [];
let TrackPaths3 = [];
let TrackPaths4 = [];
let TrackPaths5 = [];


//variable for the 





//submit button
var submitButton = null;

//gloval variable for holding canvas
let canvas = null;

//variables for storing the buttons
var A1, A2, B1, B2, C1, C2 = null;

//array of wordButtons
var wordButtons = [];

var hasSubmitted = false;

var currentScene = 0;

// setup() runs once at the beginning
function setup() {
  
  //create canvas
  canvas= createCanvas(windowWidth,windowHeight);

  //white background
  background(255);
  
  //create the buttons
  //TODO: fine-tune the width and heights so that
  //you are sure that when u click on them they trigger functions
  //        word = new WordButton(  x,   y,  w, h, word, row)
  wordButtons[0] = new WordButton(100, 200, 100, 50, 0, 0);
  wordButtons[1] = new WordButton(400, 200, 100, 50, 1, 0);
  wordButtons[2] = new WordButton(100, 400, 100, 50, 2, 1);
  wordButtons[3] = new WordButton(400, 400,  50, 30, 3, 1);
  wordButtons[4] = new WordButton(100, 600,  50, 30, 4, 2);
  wordButtons[5] = new WordButton(400, 600, 200, 30, 5, 2);

  //defining the rows

  //defining the wav files



  //create the button for submit
  submitButton = createButton('submit');
  //set its position
  submitButton.position(300, 700);
  //callback for when its pressed
  submitButton.mousePressed(submitted);

}

// draw() runs on loop, after setup()
function draw() {

  if (currentScene == 0) {
      if (hasSubmitted) {
      
      background(255/2);
    }
    else {
      
      background(255)

      //non-interactive raw questions
      textStyle(BOLD);
      fill((sin(9) * 50),(sin(9) * 40),(sin(9) * 10)); 
      text('greetings',100,70);
      text('Do you happen to be',100,170);
      text('Would you care to share words of', 100,370);
      text('with a fellow inhabitant of a far-away urban', 100,570);

      //show the buttons on the canvas
      for (var i = 0; i < wordButtons.length; i++) {
        wordButtons[i].show();
      }
    }
  }

  if (currentScene == 1) 
  {
    background(255/3)
    textStyle(ITALIC)
    textFont('Courier');
    text('You HAVE SENt a poem to someone in London',100,100);
    submitButton.hide();
  }

  if (currentScene == 2) 
  {
    background(255, 255, 0);
    text('care to listen to a randomly generated poem by someone in NewYork')
    //put play element dom button here 
  }



  

  //add dom element for submit button


}

//p5.js function triggered when the mouse is pressed
function mousePressed() {

  for (var i = 0; i < wordButtons.length; i++) {
    wordButtons[i].touched(mouseX, mouseY);
  }

}

//class WordButton
//for doing the buttons on the screen
class WordButton {
  
  //constructor
  //x,y position of the word
  //w, h width and height of the word
  constructor(x,y,w,h,word, row){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.word=interactiveWords[word]
    this.hasBeenClicked = false;
    this.row = row;
  }
 
  //show() is method for showing on canvas
  show(){

    if (this.hasBeenClicked) {
       textSize(30);
      textStyle(BOLD)
      textFont('Courier');
      text(this.word, this.x, this.y, this.w, this.h);
    } else {
      textSize(30);
      textStyle(ITALIC)
      textFont('Courier');
      text(this.word, this.x, this.y, this.w, this.h);
    }

   
  }

  //touched(cx, cy)
  touched(touchedX, touchedY){
    //check if position of click is inside the bounding box
     if ((touchedX> this.x) && 
      (touchedX < this.x + this.w) && 
      (touchedY > this.y) 
      && (touchedY < this.y + this.h))
      {
        //retrieve current row
        var currentRow = this.row;
        //retrieve current word
        var currentWord = this.word;

        //go through every element and retrieve the one that
        //is on the same row and does not contain the same word
        //so that we are actually retrieving the other element on the roww
        for (var i = 0; i < wordButtons.length; i++) {
          if (wordButtons[i].row == currentRow && wordButtons[i].word != currentWord) {
            //only click the current element
            //if the other element on the row has not been clicked yet
            if (wordButtons[i].hasBeenClicked == false) {
              this.hasBeenClicked = !this.hasBeenClicked;
            }
          }
        }

      
      console.log('clicked ' + this.word)
      } 
  }
}

  

//function to call the variable hasSubmitted into the draw loop that changes the scene
function submitted(){

  hasSubmitted = true;
    currentScene = 1;
    randomizeFiles();
console.log('submitbuttonClicked')

}

//function to randomize the elements within the conjoined arrays
function randomizeFiles() {
  console.log("here i randomized files");

  //let ArrayOfTrackArrays[i]="TrackPaths"+i

  //if current.word + current.word2 + current.word3{

    //make some kind of 
  
}

//function to load various arrays of trackpaths into program
//  



// if (start){
//     if (sounds[soundplaying].isPlaying() == false) {
//       if(soundplaying<sounds.length-1){
//     //shuffle(sounds);
//     soundplaying++;
//     sounds[soundplaying].play()
//     }
//     else{
//       start=false
//     } 
//   }
// }








//Assign an array of .wav files to each element of the InteractiveWords array 
//so for (var i = 0; i < wordButtons.length; i++) {

//











//have a class for the behaviour of each interactive word 
//in draw, draw all of them at their individual positions
//in draw, make a dom submit button 
//output ?? of submit button 

//create a submit button 














 
  
