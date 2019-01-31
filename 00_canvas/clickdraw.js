// retrieve node in DOM via ID
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ff0000";
//console.log(c);
//console.log(ctx);

// origin at top left
// increasing x to right
// increasing y down
// ( x start, y start, x length, y length )
//ctx.fillStyle = "#ff0000";
//ctx.fillRect(50, 50, 100, 200);

// draw rect at location
var draw = document.getElementById("slate");
draw.addEventListener('click', function(e){
    console.log("CLICKe");
    var x = e.offsetX;
    console.log('x = ' + x);
    var y = e.offsetY;
    console.log('y = ' + y);
    ctx.fillRect( x-25, y-25, 50, 50 );
});

// clear button
var clear = document.getElementById("b");
clear.addEventListener('click', function(){
    ctx.clearRect(0,0,600,600);
})
