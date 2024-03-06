function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
video.size(400, 400);
video.hide();
}


function save_image() {
    save('myFiltetImage.png');
}

function draw() {
  image(video, 0, 0, 400, 400);
}
