let x = 0;
let y = 0;
let easing = 0.05; // 1 ~ 0

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(3, 244, 252, 20);
}
function draw() {

    let targetX = mouseX;
    x += (targetX - x) * easing;
    
    let targetY = mouseY;
    y += (targetY - y) * easing;
    ellipse(x, y, 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}