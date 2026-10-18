let posX,xSpeed;

function setup(){
    createCanvas(600,400);
    posX=width/2;
    xSpeed=5;
    
}

function draw(){
    background(lightblue);
    fill(limegreen);
    circle(posX,height/2,50);
    posX+=xSpeed;
    if (posX>=width-25||posX<=25){xSpeed=-xSpeed}
}