var text = 1;
function postFunction() {
    var message = document.getElementById("text1");
    if (text == 1) {
        var post = document.getElementById("post1");
        post.innerHTML = message.value;
        text++;
    }
    else if(text == 2){
        var post = document.getElementById("reply1");
        post.innerHTML = message.value;
        text++;
    }
    else if(text == 3){
        var post = document.getElementById("reply2");
        post.innerHTML = message.value;
        text++;
    }
}  
function clearFunction(){
    var post = document.getElementById("post1");
        post.innerHTML = "";
        var post = document.getElementById("reply1");
        post.innerHTML = "";  
        var post = document.getElementById("reply2");
        post.innerHTML = "";
        text = 1;
}
