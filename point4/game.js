var pjs = new PointJS(640, 480, {
	 // optional
});
// pjs.system.initFullPage(); // for Full Page mode
// pjs.system.initFullScreen(); // for Full Screen mode (only Desctop)

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Objects manager
var math   = pjs.math;           // More Math-methods

var key   = pjs.keyControl.initKeyControl();
var mouse = pjs.mouseControl.initMouseControl();
// var touch = pjs.touchControl.initTouchControl();
// var act   = pjs.actionControl.initActionControl();

var width  = game.getWH().w; // width of scene viewport
var height = game.getWH().h; // height of scene viewport

pjs.system.setTitle('PointJS Game'); // Set Title for Tab or Window
var fon = game.newImageObject({
    file: 'fon.png',
    x:0, y:0

});
var circle = game.newCircleObject({
	x:0, y:0,
    radius : 25,
    fillColor : "#FBFE6F",
    visible : true
});



// Game Loop
game.newLoopFromConstructor('myGame', function () {
	// Constructor Game Loop


	this.update = function () {
		// Update function

		game.clear(); // clear screen
        fon.draw();

        circle.draw();
        pjs.camera.follow(circle, 10);

		if (key.isDown('UP')){
			circle.y -=2;
		}
		else if (key.isDown('DOWN')){
			circle.y+=2;
		}
        else if (key.isDown('LEFT')){
            circle.x-=2;
        }
        else if (key.isDown('RIGHT')){
            circle.x+=2;
        }
        else if (key.isPress('SPACE')) {
            var count = 50;
            var up = setInterval(function () {
                circle.y -= 2;
                count--;
                console.log(count);

                if (count === 0) {
                    clearInterval(up);
                    down();
                }

                function down() {
                    var downInterval = setInterval(function () {
                        circle.y += 2;
                        count++;
                        if (count === 50) {
                            clearInterval(downInterval);
                        }
                    },9)
                }
            },3);
        }

	};






	// this.entry = function () { // optional
	// 	log('myGame is started');
	// };
    //
	// this.exit = function () { // optional
	// 	log('myGame is stopped');
	// };

});

game.startLoop('myGame');