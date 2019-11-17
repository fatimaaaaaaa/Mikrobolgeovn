var dragging = false; // Is the slider being dragged?
var rollover = false; // Is the mouse over the slider?

// Circle variables for knob
var x = 150;
var y = 180;
var r = 105;

// Knob angle
var angle = 0;

var count = 0;

// Offset angle for turning knob
var offsetAngle = 0;

function setup() {
  let cnv=createCanvas(300, 320);
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
  line(-r, 0, r, 0);
  
  
  pop();
  fill(0);


  // Map is an amazing function that will map one range to another!
  // Here we take the slider's range and map it to a value between 0 and 255
  // Our angle is either between
  var calcAngle = 0; 
  if (angle < 0) {
    calcAngle = map(angle, -PI, 0, PI, 0);
  } 
  else if (angle > 0) {
    calcAngle = map(angle, 0, PI, TWO_PI, PI);
  }
 textSize(20);
 textStyle(BOLD);
 text('0', 280, 185);
  text('200W', 250, 90);
  text('400W', 150, 40);
  text('600W', 30, 90);
  text('Max', 20, 185); 


  textAlign(CENTER);
  textSize(24);
  text(int(degrees(calcAngle)), x, y+r+20);

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
}

function mouseReleased() {
  // Stop dragging
  dragging = false;

  //Knob 2 ---------------------------------------------
  var dragging2 = false; // Is the slider being dragged?
var rollover2 = false; // Is the mouse over the slider?

// Circle variables for knob
var x2 = 150;
var y2 = 180;
var r2 = 105;

// Knob angle
var angle2 = 0;

var count2 = 0;

// Offset angle for turning knob
var offsetAngle2 = 0;


function draw() {
  
}

function mouseReleased() {
  // Stop dragging
  dragging = false;


}
}



