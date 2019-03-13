var pic = document.getElementById("vimage");
var clear = document.getElementById('but_clear');

var oldx;
var oldy;

pic.addEventListener('click', function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    c.setAttribute('cx', e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);

    drawSeg(e.offsetX, e.offsetY, oldx, oldy);
    oldx = e.offsetX;
    oldy = e.offsetY;

});

function drawSeg(x, y, oldx, oldy){
    console.log(pic.childNodes.length)

    if (pic.childNodes.length <= 2){
        oldx = x;
        oldy = y;
    };
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute('x1', oldx);
    line.setAttribute('y1', oldy);
    line.setAttribute('x2', x);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', 'red');
    pic.appendChild(line);
};

clear.addEventListener('click', function(){
    console.log(pic);
    while (pic.lastChild){
        pic.removeChild(pic.lastChild);
    }
});
