var dragging = false; // Is the slider being dragged?
var rollover = false; // Is the mouse over the slider?
var buffer;
var dragging2 = false; // Is the slider being dragged?
var rollover2 = false; // Is the mouse over the slider?
var buffer2;

// Circle variables for knob
var x = 150;
var y = 180;
var r = 90;
var x2 = 150;
var y2 = 500;
var r2 = 90;

// Knob angle
var angle=0;
var angle2 = 0;
var count=0;
var count2 = 0;

// Offset angle for turning knob
var offsetAngle=0;
var offsetAngle2 = 0;

function setup() {
  let cnv=createCanvas(300, 650);
  cnv.id('myCanvas')
}

function draw() {

  background(255);

	if (count === 0) {
		
  // Is it being dragged?
  if (dragging) {
    var dx = mouseX - x;
    var dy = mouseY - y;
    var mouseAngle = atan2(dy, dx);
    angle = mouseAngle - offsetAngle;
  }

  // Fill according to state
  if (dragging) {
    fill (175);
  } 
  else {
    fill(255);
  }
  // Draw ellipse for knob
  push();
  translate(x, y);
  rotate(angle);
  strokeWeight(4);
  ellipse(0, 0, r*2, r*2);
  strokeWeight(4);
  line(-r, 0, 0, 0);
  pop();
  fill(0);
  var calcAngle = 0; 
  if (angle < 0) {
    calcAngle = map(angle, -PI, 0, PI, 0);
  } 
  else if (angle > 0) {
    calcAngle = map(angle, 0, PI, TWO_PI, PI);
  }
 textSize(20);
 textStyle(BOLD);
 text('MAX', 270, 185);
  text('600W', 250, 120);
  text('400W', 150, 70);
  text('200W', 40, 120);
  text('0', 40, 185); 
textAlign(CENTER);
  textSize(24);
  var output=(int(degrees(calcAngle)));
  text(output, x, y+r+20);

	var degree = int(degrees(calcAngle));

	if (dragging && degree < 10) {
		count == 2;
	}
	}
	if (count === 2) {
		var b = map(calcAngle, 0, TWO_PI, 0, 255);
		fill(b);
		rect(320, 90, 160, 180);
  }
  //NUmmer 2 
if(count2==0){
  if(dragging2){
    var dx2=mouseX-x2;
    var dy2=mouseY-y2;
    var mouseAngle2=atan2(dy2,dx2);
    angle2=mouseAngle2-offsetAngle2
  }
  if(dragging2){
    fill(175);
  }
  else(fill(255));
}
push();
translate(x2,y2);
rotate(angle2);
strokeWeight(4);
ellipse(0,0,r2*2,r2*2);
strokeWeight(4);
line(0,-r2,0,0);
pop();
fill(0);
var calcAngle2=0;
if(angle2<0){
  calcAngle2=map(angle2,-PI,0,PI,0);
}
else if(angle2>0){
  calcAngle2=map(angle2,0,PI,TWO_PI,PI);
}
textSize(20);
 textStyle(BOLD);
 text('0', 150, 400);
 text('5', 200, 420);
 text('10', 240, 455);
 text('15', 260, 505);
 text('20', 245, 560);
 text('25', 210, 600);
 text('30', 150, 610);
 
  
textAlign(CENTER);
  textSize(24);
  var output2=(int(degrees(calcAngle2)));
  text(output2, x2, y2+r2+50);
  var degree2 = int(degrees(calcAngle2));
  if (dragging2 && degree2 < 10) {
		count2 == 2;
  }
  if (count2 === 2) {
		var b2 = map(calcAngle2, 0, TWO_PI, 0, 255);
		fill(b2);
		rect(320, 90, 160, 180);
  }
  


  /*Så legger vi til funksjonalitet for å se om brukerne treffer rett*/ 
  /*Test 1 skal teste brukeren til å stille mikrobølgeovnen til maks, og tiden til 30 minutter*/ 

    if(output>175 && output<185 && output2<183 && output2>175  ){
        // max + 30 min
      document.getElementById('rect').style.color='blue';     
      document.getElementById('rect').style.fill='blue';     
    }
    else if(output>260 && output<275 && output2<275 && output2>267  ){
        // halv power i 15 min
      document.getElementById('rect').style.color='yellow';     
      document.getElementById('rect').style.fill='yellow';     
    }
    else if(output>315 && output<330 && output2<352 && output2>345  ){
        // 200W + 2min
      document.getElementById('rect').style.color='green';     
      document.getElementById('rect').style.fill='green';     
    }
   /* if(output>315 && output<330 && output2<352 && output2>345  ){
        // Varme i 2 min, og deretter i 3 min.
      document.getElementById('rect').style.color='pink';     
      document.getElementById('rect').style.fill='pink';     
    }*/
    else{
      document.getElementById('rect').style.color='white';     
      document.getElementById('rect').style.fill='white';   
    }

  } 




function mousePressed() {
  // Did I click on slider?
  if (dist(mouseX, mouseY, x, y) < r) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    var dx = mouseX - x;
    var dy = mouseY - y;
    offsetAngle = atan2(dy, dx) - angle;
  }
  if(dist(mouseX,mouseY,x2,y2)<r2){
    dragging2=true;
    var dx2=mouseX-x2;
    var dy2=mouseY-y2;
    offsetAngle2=atan2(dy2,dx2)-angle2;
  }
  

}
var over=false;

function mouseReleased() {
  // Stop dragging
  dragging = false;
  dragging2=false;
  over=true;
}





