let texTweet = "";



function getTweet(){
    document.getElementById("btn").addEventListener("click", publish);
};

function publish() {
    texTweet = document.getElementById("tweet").value;
    document.getElementById("msg").innerHTML = texTweet;
   
};
window.onload = getTweet;
  
