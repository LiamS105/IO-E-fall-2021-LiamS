let video;
let pose;
let noseX;
let noseY;
let animal;
let nature;
let canvas;

function preload(){ 
    animal = new Audio("https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/animals_lion_growl_001.mp3")
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function setup(){
canvas = createCanvas(640, 480);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
nature.play();
}

function gotPoses(poses){
    noseX = poses[0].pose.nose.x
    noseY = poses[0].pose.nose.y
    console.log(noseX);
    if(noseX > 100 && noseX < 400){
        animal.play();
            // dingdong.stop();
} 
}

function draw(){
image(video, 0, 0);
if(pose){
    fill(255,0,0);
    ellipse(pose.nose.x, pose.nose.y, 10);
} 

}