var pic = document.getElementById("vimage");
var clear = document.getElementById('but_clear');

var oldx;
var oldy;

// click on blank create circle
pic.addEventListener('click', function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    c.setAttribute('cx', e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    c.style.pointerEvents = 'none';
    pic.appendChild(c);
    c.addEventListener('click', color_change(c));
});

// click on circle, change color
function color_change(c){
    console.log(c);
    c.setAttribute('fill', 'green');
};

// click again to remove and make new random


clear.addEventListener('click', function(){
    while (pic.lastChild){
        pic.removeChild(pic.lastChild);
    }
});
