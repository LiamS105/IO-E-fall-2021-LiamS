// this is a very simple sketch that demonstrates how to place a video cam image into a canvas 

let video;
let pose;

function setup(){
createCanvas(640, 480);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses) 
image(video, 0, 0);
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function gotPoses(poses){
    console.log(poses);
    if( poses.length >0 ){
        pose = poses[0].pose;
    } 
    
} 

function draw(){
if(pose){
    fill(255,0,0);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 10);
}    
    
}