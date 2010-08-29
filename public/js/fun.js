function displayNotice(text) {
	var div = $("<p />")
		.hide()
		.text(text)
		.addClass("sidebar-notice")
		.css({ "opacity": "0.0", "color": "#FFC0CB" })
		.prependTo($("#sidebar"))
		.slideDown()
		.animate({ "opacity": "1.0" }, "slow");

	setTimeout(function(){div.css({ "color": "#fff" });}, 1000);	
}

float bx = getX();
float by = getY();
int bs = 9;

function getX() {
	return floor(random(width)/10) * 10 + 1;
}

function getY() {
	return floor(random(height)/10) * 10 + 1;
}

void setup() {
	size(961, 601);
	smooth();
  frameRate(10);
}

void draw() {
  background(0xffeeeeee);
  drawGrid();  
  newPixel(bx,by);
}

void drawGrid() {
	stroke(0xffdddddd);
	for (var x = 0.5; x <= width; x += 10) {
	  line(x, 0, x, height);
	}
	for (var y = 0.5; y <= height; y += 10) {
	  line(0, y, width, y);
	}
}

void placePixel() {
  var x = floor(random(width)  / 10) * 10;
  var y = floor(random(height) / 10) * 10;
  newPixel(x + 1, y + 1);
}

void newPixel(x,y) {
  strokeWeight(2);
  stroke(0xff007FFF);
  fill(0xff89CFF0);
	rect(x,y,9,9);
}

void keyPressed() {
    if (key == CODED) {
        if (keyCode == LEFT) {
            PLAYER.move('left');
        } else if (keyCode == RIGHT) {
            PLAYER.move('right');
        } else if (keyCode == UP) {
            PLAYER.move('up');
        } else if (keyCode == DOWN) {
            PLAYER.move('down');
        }
    }
}

PLAYER = createPlayer(floor(random()*96), floor(random()*60));

