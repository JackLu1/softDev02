var svg = document.getElementById("vimage");
var clear = document.getElementById('but_clear');

var oldx;
var oldy;

// click on blank create circle
svg.addEventListener('click', function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    rect = svg.getBoundingClientRect();
    c.setAttribute('cx', e.clientX - rect.left);
    c.setAttribute("cy", e.clientY - rect.top);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    svg.appendChild(c);
    c.addEventListener('click', color_change);
});

// click on circle, change color
var color_change = function(e){
    //console.log(e);
    e.stopImmediatePropagation();
    circle = e.explicitOriginalTarget;
    if (circle.getAttribute('fill') == 'red'){
        circle.setAttribute('fill', 'blue');
    }
    else {
        //already blue
        circle.addEventListener('click', teleport(circle));
    }
    //svg.removeEventListener('click', color_change);

};

// teleport circle to random positoin after 2 clicks
function teleport(c){
    newX = Math.random() * 500;
    newY = Math.random() * 500;
    c.setAttribute('cx', parseInt(newX));
    c.setAttribute('cy', parseInt(newY));
    c.setAttribute('fill', 'red');
};


clear.addEventListener('click', function(){
    while (svg.lastChild){
        svg.removeChild(svg.lastChild);
    }
});
