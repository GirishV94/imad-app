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
var submit = document.getElementById('submit_btn');
submit.onclick=function(){
//make a request to the server and send the name

//capture a list of names and render it as a list.
var names = ['name1','name2','name3','name4'];
var list = '';
for (var i=0; i< names.length; i++){
    list += '<li>' + names[i] + '</li>';
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
};




