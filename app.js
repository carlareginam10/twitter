let texTweet = "";



function getTweet(){
    document.getElementById("btn").addEventListener("click", publish);
};

function publish() {

    texTweet = document.getElementById("tweet").value;

    if(texTweet.length >= 1 && texTweet.length <=140){
     document.getElementById("msg").innerHTML = texTweet;
       
    }else{
        document.getElementById("btn").disabled = true;
    }
    
    
    

   
   
          

    
};
window.onload = getTweet;
  
