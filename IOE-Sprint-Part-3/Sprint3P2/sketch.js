let speech;
var input;
var button;

function setup() {
  createCanvas(400, 100);
    
  input = createInput();
  input.position(20, 30);
  button = createButton("submit");
  button.position(input.x + input.width, 30);
  button.mousePressed(drawName);
    
  speech = new p5.Speech(voiceReady); //callback, speech synthesis object
  // speech.onLOad = voiceReady;
  speech.started(startSpeaking);
  //speech.ended(endSpeaking);
  
  function startSpeaking() {
    background(0,255,0);
  }
  
  function voiceReady() {
    console.log(speech.voices);
  }
  
}


function draw() {
  background(220);
}

function drawName() {
  const name = input.value();
  console.log("name: "+ name)
  speech.setVoice('SpeechSynthesisVoice');
  speech.speak(name); // say something
  input.value('');
  for (var i=0; i < 30; i++) {
    fill(random(255));
    text(name, random(width), random(height));
  }
}