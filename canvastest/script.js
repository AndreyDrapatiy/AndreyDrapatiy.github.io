var canvas  = document.getElementById("canvas");
var ctx     = canvas.getContext('2d');


var x = 10;
var y = 10;

function cube() {
    ctx.fillStyle = "#000";
    ctx.fillRect(x,y,15,15);
}

function cubeUp() {
    ctx.clearRect(0, 0, 300, 300);
    cube();
    y+=6;
}
function cubeDown() {
    ctx.clearRect(0, 0, 300, 300);
    cube();
    y-=6;
}

window.addEventListener('keydown',function () {
   if( event.keyCode === 40){
      cubeUp();
   }
   else if(event.keyCode === 38){
       cubeDown();
   }
});