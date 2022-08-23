noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
text_size = 0;


function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(750, 137.5)
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.position(25, 137.5)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("Model Loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX: " + noseX);
        console.log("noseY: " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        text_size = floor((leftWristX - rightWristX)/2);
        console.log("Difference Between leftWristX and rightWristX: " + text_size);
    }
}

function draw() {
    background("#e5cef0");
    textSize(text_size);
    textFont("Comic Sans MS")
    fill("#7ede86");
    text("Tanish", noseX-(text_size/0.6), noseY+(text_size/7.2));
    document.getElementById("font_size").innerHTML = "The Font Size Is " + text_size + "px"

}

