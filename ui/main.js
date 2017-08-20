console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = "NewValue";

var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    }
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
    img.style.marginleft = '100px';
};


