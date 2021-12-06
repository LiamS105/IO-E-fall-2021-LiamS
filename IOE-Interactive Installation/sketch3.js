// this is a very simple sketch that demonstrates how to place a video cam image into a canvas 

let video;
let pose;
let lastX;
let lastY;
let drawOn = true;


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

function mouseClicked(){
    drawOn = !drawOn;
};


function draw(){
if(pose){
    fill(255,0,0);
    if (drawOn){
        line(lastX, lastY, pose.leftWrist.x, pose.leftWrist.y)
        ellipse(pose.leftWrist.x, pose.leftWrist.y, 10);
    }
    lastX = pose.leftWrist.x
    lastY = pose.leftWrist.y
}    
    
}