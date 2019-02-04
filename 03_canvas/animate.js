// LuMing -- Jack Lu, Matthew Ming
// SoftDev2 pd8
// K03 -- 
// 2019-02-04

// state var expand or contract
// propogating animation (frames)

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var requestID; var radius = 0; var growing = 1;

var clear = function(e) {
    // ...
};

var drawDot = function(){

    // ...

    //draw a dot
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    // update
    if (radius < c.width / 2 || radius = 0){
        radius += growing;
        requestID = window.requestAnimationFrame(drawDot);
        console.log(requestID);
    } else {
        growing = -1;


    }
    growing = false;
};

var stopIt = function(){
    console.log( requestID );
    // ...
};

var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");

dotButton.addEventListener('click', drawDot);
stopButton.addEventListener('click', stopIt);
