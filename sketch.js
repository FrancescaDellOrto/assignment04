var half_width;
var day_width; 
var secondi;
var ore;
var oggi;
var data;
var mills;

function setup() {
    
    createCanvas(windowWidth, windowHeight);

    date = new Date();
    
    
}


function draw() {
    half_width = windowWidth/2;
    day_width = windowWidth/7;

   background(237,34,93);

    translate(width/2, height/2);


    if(second() != secondi){
        mills = millis();
        secondi = second();
    }

  
    if(hour() != ore){
        oggi = date.getDay();
        ore = hour();
    }

    fill(255,255,255);
    noStroke();
    arc(0,0,half_width+windowWidth/50, half_width+windowWidth/50, -PI/2, TWO_PI*((second()+((millis()-mills)/1000)-15)/60));
    fill(237,34,93);
    noStroke();
    ellipse(0,0,half_width, half_width)


    fill(255,255,255);
 
    arc(0,0,half_width+windowWidth/300, half_width+windowWidth/300, -PI/2,TWO_PI*((minute()+(second()/60)-15)/60));
    fill(237,34,93);
    noStroke();
    ellipse(0,0,half_width-windowWidth/12, half_width-windowWidth/12)


    fill(255,255,255);
 
    arc(0,0,half_width-windowWidth/5, half_width-windowWidth/5, -PI/2,TWO_PI*((hour()+(minute()/60)-3)/12));
    fill(237,34,93);
    noStroke();
    ellipse(0,0,half_width-windowWidth/3, half_width-windowWidth/3)


    translate(-width/2, -height/2);


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}