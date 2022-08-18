function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(900, 137.5)
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.position(50, 137.5)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("Model Loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}



