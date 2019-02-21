
document.getElementById("btn").addEventListener("click", publish);
document.getElementById("tweet").addEventListener("keyup", limit_textarea);

  
   
function btnEnable(btn){
    btn.disabled = false;
}

function btnDesable(btn){
    btn.disabled = true;
}

function showTweet () {
    document.getElementById("msgPublish").className="hide";
    document.getElementById("msgPublish").className="show";  
}

function limit_textarea() {   
    texTweet = document.getElementById("tweet").value; 
    let quantity = 140;
    let tweet = texTweet.length;
    let rest;  
       
    if(tweet > 140 || tweet === 0){
         btnDesable(btn);
    }
    
    if(tweet >=1 && tweet <=140 ){
        btnEnable(btn);        
   }

    rest = quantity - tweet;
    document.getElementById('cont').innerHTML = rest;
    if(rest >20){
    document.getElementById('cont').style.color = 'rgb(0,0,255)'
    }
    if(rest <=20){
     document.getElementById('cont').style.color = 'rgb(153,204,50)'
    }
    if(rest <=10){
        document.getElementById('cont').style.color = 'rgb(255, 0, 0)'
    }
   
}

function autoResize(tweet){
    tweet = document.getElementById("tweet");
    tweet.addEventListener('keydown', function(){
    tweet.style.height = 'auto';
    tweet.style.height = tweet.scrollHeight + 'px';
    });
}


function publish() {
    let time = document.createElement('p');
    let publicTime = moment().format('llll');
    time.innerHTML = publicTime;
    msgPublish.appendChild(time);

    texTweet = document.getElementById("tweet").value; 
    let paragraph= document.createElement('article');
    let txtParagraph = document.createTextNode(texTweet);
    paragraph.appendChild(txtParagraph);
    document.getElementById('msgPublish').appendChild(paragraph);

    showTweet ();    
};

autoResize(tweet);



