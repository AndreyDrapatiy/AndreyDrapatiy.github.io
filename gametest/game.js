var pjs = new PointJS('2D', 640, 480, {
});
pjs.system.initFullPage(); // for Full Page mode
// pjs.system.initFullScreen(); // for Full Screen mode (only Desktop)

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Objects manager
var math   = pjs.math;           // More Math-methods
var levels = pjs.levels;         // Levels manager

// var key   = pjs.keyControl.initKeyControl();
// var mouse = pjs.mouseControl.initMouseControl();
var touch = pjs.touchControl.initTouchControl();
// var act   = pjs.actionControl.initActionControl();

var width  = game.getWH().w; // width of scene viewport
var height = game.getWH().h; // height of scene viewport

pjs.system.setTitle('PointJS Game'); // Set Title for Tab or Window


var bg_1 = game.newImageObject({
    x:0, y:0, file: 'background.jpg',
    onload:function () {
        bg_1.x = bg_1.x + bg_1.w;
    }
});
var bg_2 = game.newImageObject({
    x:0, y:0, file: 'background.jpg'
});


var gr_1 = game.newImageObject({
    x:0, y:0, file: 'ground.jpg',
	w:width,
    onload:function () {
    	gr_2.y = gr_1.y = height - gr_1.h;
		gr_2.x = gr_1.x + gr_1.w;
    }

});

var gr_2 = game.newImageObject({
    x:0, y:0, file: 'ground.jpg',
    w:width
});



var rect = game.newImageObject({
    file: 'rect.png',
    w : 50, h : 50,
    y: 210, x: 30
});






var backGroundMove = function (s) {
	bg_1.move(point(-s / 4,0));
	bg_2.move(point(-s / 4,0));

    gr_1.move(point(-s ,0));
    gr_2.move(point(-s ,0));


    if(bg_1.x + bg_1.w < 0){
        bg_1.x = bg_2.x + bg_2.w;
    }
    if(bg_2.x + bg_2.w < 0){
        bg_2.x = bg_1.x + bg_1.w;
    }

    if(gr_1.x + gr_1.w < 0){
        gr_1.x = gr_2.x + gr_2.w;
    }
    if(gr_2.x + gr_2.w < 0){
        gr_2.x = gr_1.x + gr_1.w;
    }
};

// Game Loop
game.newLoopFromConstructor('myGame', function () {
	// Constructor Game Loop



	this.update = function () {
		// Update function
        game.clear();
        bg_1.draw();
		bg_2.draw();
		gr_1.draw();
		gr_2.draw();


        rect.draw();

		backGroundMove(2);

        if (touch.isPress()) {

            var count = 50;
            var up = setInterval(function () {
                rect.y -= 2;
                count--;


                if (count === 0) {
                    clearInterval(up);
                    down();
                }

                function down() {
                    var downInterval = setInterval(function () {
                        rect.y += 2;
                        count++;
                        if (count === 50) {
                            clearInterval(downInterval);
                        }
                    },9)
                }
            },3);
        }

    };


});

game.startLoop('myGame');