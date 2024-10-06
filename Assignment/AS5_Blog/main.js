var postCount = 1;

window.onload = Top;

function Top() {
    document.getElementById("top").innerHTML = "Welcome to the forum";
}

function postFunction()
{
    var message = document.getElementById("message").value;
    
    if (postCount == 1)
    {
        document.getElementById("topic").innerHTML = message; 
    }
    else if (postCount == 2)
    {
        document.getElementById("reply1").innerHTML = message; 
    }
    else if (postCount == 3)
    {
        document.getElementById("reply2").innerHTML = message; 
    }
    postCount++;
    document.getElementById("message").value = "";
}


function clearFunction()
{
    document.getElementById("message").value = "";
    document.getElementById("topic").innerHTML = ""; 
    document.getElementById("reply1").innerHTML = ""; 
    document.getElementById("reply2").innerHTML = "";
    postCount = 1;   
}