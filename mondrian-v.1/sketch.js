var N = 2; //number of recursive steps


function mondrian(x, y, x2, y2, N) {

	if(N == 0){
		//base case
		var borderWeight = 3; //stroke weight
		var col = ['#ffcb21', '#ffffff', '#537bbe', '#e44240']; //yellow, white, blue, red

		fill(col[floor(random(col.length))]); //randomly choose color
		strokeWeight(borderWeight);
		rect(x, y, x2-x-borderWeight, y2-y-borderWeight);

	} else {
		//recursive step -- break current rect() into 4 new random rectangles
		var i = floor(random(x, x2)); //random x within current rect()
		var j = floor(random(y, y2)); //random y within current rect()

		//recurse all rectangles
		mondrian(x, y, i, j, N-1); //upper left rect()
		mondrian(i, y, x2, j, N-1); //upper right rect()
		mondrian(x, j, i, y2, N-1); //lower left rect()
		mondrian(i, j, x2, y2, N-1); //lower right ()

	}
}

function setup() {
	createCanvas(500, 500);
	mondrian(1, 1, 500, 500, N);
}

function draw() {


}

function keyPressed() {
mondrian(1, 1, 500, 500, N);
}
