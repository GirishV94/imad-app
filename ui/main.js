//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    // create the request object
    var request = new XMLHttpRequest();
   
   
    // cap res and store in var
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }//Note Done Yet
    };
    //make a response to counter var
    request.open('GET', 'http://gvidhani99.imad.hasura-app.io/counter', true);
    request.send(null);
};


//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;



