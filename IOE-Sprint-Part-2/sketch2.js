// this is a very simple sketch that demonstrates how to place a video cam image into a canvas 

let video;
let pose;
let noseX;
let noseY;
let dingdong;

function preload(){
    dingdong = loadSound('./doorbell.mp3');
}

function setup(){
createCanvas(640, 480);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
    
    
    
};

function gotPoses(poses){
    noseX = poses[0].pose.nose.x
    noseY = poses[0].pose.nose.y
    console.log(noseX);
    if(noseX < 200 && noseX > 0){
       if (getAudioContext().state !== 'running') {
            dingdong.play();
        } 
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