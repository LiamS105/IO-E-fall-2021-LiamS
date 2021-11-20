//Open directly from index.html without using any code editors


// A2Z F18
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F18

// Speech Object
let speech;
let dog;
let cat;
let mouse;
let said = "dog"

// function preload() {
//   // preload() runs once
//   dog = loadImage('http://0.0.0.0:8000/img/dog.jpeg');
//   cat = loadImage('http://0.0.0.0:8000/img/cat.jpeg');
//   mouse = loadImage('http://0.0.0.0:8000/img/mouse.jpeg');
// }

function setup() {
  createCanvas(720, 400);
  dog = new Image();
  dog.src = "img/dog.jpeg";
  cat = new Image();
  cat.src = "img/cat.jpeg";
  mouse = new Image();
  mouse.src = "img/mouse.jpeg";
  
  // Create a Speech Recognition object with callback
  speechRec = new p5.SpeechRec('en-US', gotSpeech);
  // "Continuous recognition" (as opposed to one time only)
  let continuous = true;
  // If you want to try partial recognition (faster, less accurate)
  let interimResults = false;
  // This must come after setting the properties
  speechRec.start(continuous, interimResults);

  // DOM element to display results
  let output = select('#speech');

  // Speech recognized event
  function gotSpeech() {
    // Something is there
    // Get it as a string, you can also get JSON with more info
    console.log(speechRec);
    if (speechRec.resultValue) {
      said = speechRec.resultString;
      // Show user
      output.html(said);
    }
  }
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  said = said.toLowerCase();
  if (said == 'cat') {
    drawingContext.drawImage(cat,0,0);
  } else if (said == 'mouse') {
    drawingContext.drawImage(mouse,0,0);
  } else if (said == 'dog') {
    drawingContext.drawImage(dog,0,0);
  }
}
  
