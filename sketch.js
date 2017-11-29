//experiment 1 for hypno-comfort
//isaaaaaaaaaaaa




let WISDOM = ["assets/WISDOM/Bit0.wav","assets/WISDOM/Bit1.wav" ,"assets/WISDOM/Bit2.wav" ,
"assets/WISDOM/Bit3.wav" ,"assets/WISDOM/Bit4.wav" ,"assets/WISDOM/Bit5.wav" ,
"assets/WISDOM/Bit6.wav" ,"assets/WISDOM/Bit7.wav" ,"assets/WISDOM/Bit8.wav" ,
"assets/WISDOM/Bit9.wav", "assets/WISDOM/Bit9.wav"];

let STRUCTURE= ["assets/STRUCTURE/Bit0.wav","assets/STRUCTURE/Bit1.wav" ,"assets/STRUCTURE/Bit2.wav" ,
"assets/STRUCTURE/Bit3.wav" ,"assets/STRUCTURE/Bit4.wav" ,"assets/STRUCTURE/Bit5.wav" ,
"assets/STRUCTURE/Bit6.wav" ,"assets/STRUCTURE/Bit7.wav" ,"assets/STRUCTURE/Bit8.wav" ,
"assets/STRUCTURE/Bit9.wav" ];

let RECOVERY = ["assets/RECOVERY/Bit0.wav","assets/RECOVERY/Bit1.wav" ,"assets/RECOVERY/Bit2.wav" ,
"assets/RECOVERY/Bit3.wav" ,"assets/RECOVERY/Bit4.wav" ,"assets/RECOVERY/Bit5.wav" ,
"assets/RECOVERY/Bit6.wav" ,"assets/RECOVERY/Bit7.wav" ,"assets/RECOVERY/Bit8.wav" ,
"assets/RECOVERY/Bit9.wav" ];



let TrackPaths = WISDOM.concat(STRUCTURE,RECOVERY);

let sounds =[];


var soundplaying;
var start=false; 


class InvisiRecButton {
  constructor(x,y,s){

    this.x=200;
    this.y= 200;
    this.s = 200;

  }
 
    show(){         
        noFill();
        noStroke();
        rect(this.x, this.y, this.s, this.s);
        
    } 
}


function setup() {
  canvas= createCanvas(windowWidth,windowHeight);
  canvas.position(150, 150);
  background(255);
  soundplaying= 0;


  
  // createElement('h2','I am fooled; alas, this is not at all what it is meant to be');
  // text.font

  }


function draw() {
  background('magenta');
  // glue the wave files
  if (start){
    if (sounds[soundplaying].isPlaying() == false) {
      if(soundplaying<10){
    //shuffle(sounds);
    soundplaying++;
    sounds[soundplaying].play()
    }
    else{
      start=false
    } 
  }
}



}

function preload(){

  soundFormats('wav');
  let numOfSounds = TrackPaths.length;
  for (let i=0; i < numOfSounds; i++) {
  // sounds[i] = loadSound('assets/STRUCTURE/Bit'+ i + '.wav');
  sounds.push(loadSound(TrackPaths[i]));
  }
 

}


  function mouseClicked(){
    start=true;
    shuffle(sounds, true);
    soundplaying=0;
    //sounds= shuffle(sounds);
    sounds[soundplaying].play();
    console.log('clicked')
  }

//  function shuffle() {
//   var m = sounds.length, t, i;

//   while (m) {

    
//     i = Math.floor(Math.random() * m--);

    
//     t = sounds[m];
//     sounds[m] = sounds[i];
//     sounds[i] = t;
//   }

//   return array;
// }






// function click(){

  
//     if( mouseClicked() &&(mouseX > InvisiRecButton.x) && (mouseX < InvisiRecButton.x + InvisiRecButton.s) 
//       && (mouseY > InvisiRecButton.y) && (mouseY < InvisiRecButton.y + InvisiRecButton.s)) 
//     {

//     mouseClicked();

//     }

// }















 
  
