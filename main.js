status1 = "";

function setup(){
    canvas= createCanvas(380, 380);
    canvas.center;
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model loaded!");
    status1 = true;
}

function draw() {
    image(video, 0, 0, 380, 380);
}
