// this is a very simple sketch that demonstrates how to place a video cam image into a canvas 

let video;
let pose;
let noseX;
let noseY;
let animal;
let nature;
let canvas;

function preload(){
    nature = new Audio("https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-sound-spark/sound_spark_Flatwoods_Scrub_Rock_Springs_Nature_Forest_Close_Birds_Loop_01.mp3");  
    animal = new Audio("https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/animals_budgerigar_chirp.mp3")
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
    } else {
        nature.play()
    }
    if( poses.length >0 ){
        pose = poses[0].pose;
    } 
} 

function draw(){
image(video, 0, 0);
if(pose){
    fill(255,0,0);
    ellipse(pose.nose.x, pose.nose.y, 10);
} 

}