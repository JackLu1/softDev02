var svg = document.getElementById("vimage");
var clear = document.getElementById('but_clear');
var move_but = document.getElementById('but_move')
var nani = document.getElementById('mystery');

var oldx;
var oldy;
var requestID;

//randomize velocities of all circles
nani.addEventListener('click', rand);
function rand(){
    var circles = svg.childNodes;
    for (var i = 1; i < circles.length; i++){
        c = circles[i];
        c.setAttribute('xvel', Math.random()*5);
        c.setAttribute('yvel', Math.random()*5);
    }

}

// move circles
move_but.addEventListener('click', move_prep);
function move_prep() {
    var r = 20;
    window.cancelAnimationFrame( requestID );
    var circles = svg.childNodes;

    var w = parseInt(svg.getAttribute('width'));
    var h = parseInt(svg.getAttribute('height'));

    var move = function(){
        for (var i = 1; i < circles.length; i++){
            c = circles[i];
            var x = parseInt(c.getAttribute('cx'));
            var y = parseInt(c.getAttribute('cy'));
            var xvel = parseInt(c.getAttribute('xvel'));
            var yvel = parseInt(c.getAttribute('yvel'));
            if (x <= 0 || x >= w){
                xvel *= -1;
                c.setAttribute('xvel', xvel);
            }
            if (y <= 0 || y >= h){
                yvel *= -1;
                c.setAttribute('yvel', yvel);
            }
            c.setAttribute('cx', x + xvel);
            c.setAttribute('cy', y + yvel);
        }
        requestID = window.requestAnimationFrame(move);
    };
    move();
};

// click on blank create circle
svg.addEventListener('click', function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    rect = svg.getBoundingClientRect();
    c.setAttribute('cx', e.clientX - rect.left);
    c.setAttribute("cy", e.clientY - rect.top);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    c.setAttribute("xvel", 2);
    c.setAttribute("yvel", 2);
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
