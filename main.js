img = "";
status = "";
objects = [];


function preload(){
img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);

    if(status !="")
    {
        
    }

    fill('red');
    text("Dog", 50, 80);
    noFill();
    stroke('blue');
    rect(30,60,450,350);

    fill('blue');
    text('Cat', 320, 120);
    noFill();
    stroke('red')
    rect(300,90,270,320);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function modelLoaded() {
    console.log('modeloaded')
    status = true;
    objectDetector.detect(img, gotResults);
}
