//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    //make a response to counter var
    
    // cap res and store in var
    
    // render the res in correct span

    counter = counter+ 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};