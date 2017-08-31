
//submit name
var submit = document.getElementById('submit_btn');
submit.onclick=function(){
//make a request to the server and send the name
    var request = new XMLHttpRequest();
   
   
    // cap res and store in var
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                //capture a list of names and render it as a list.
                    console.log('user log in');
                    alert('logged in successfuly');
                }else if(request.status === 403){
                    alert('Username/Password is Incorrect');
                }else if(request.status === 500){
                    alert('Something went wrong on the Server');
                }
            
        }//Note Done Yet
    };
    //make a response to counter var
    
    var  username = document.getElementById('username').value;
    var  password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://gvidhani99.imad.hasura-app.io/login', true);
    request.setRequestHeader('content-type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));

};




