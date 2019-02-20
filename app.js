

let txtTweet = document.getElementById("tweet");
let btnEnvia = document.getElementById("btn");

let txtInput = function (event) {
btn.disabled = !event.target.value;
}

txtTweet.addEventListener("input", txtInput);
txtTweet.dispatchEvent(new Event('input'));


function showTweet () {
    document.getElementById("msgPublish").className="hide";
    document.getElementById("msgPublish").className="show";  
}

function limit_textarea(value) {
    let quantity = 140;
    let total = value.length;
    let rest;
    if(total <= quantity) {
        rest = quantity - total;
        document.getElementById('cont').innerHTML = rest;
    }
    if(total >= 120 ){
        rest = quantity - total;
        document.getElementById('cont').innerHTML =  rest;
        document.getElementById('cont').style.color = 'rgb(153,204,50)'
        console.log("entrou no verde")
    }if(total >= 130 ){
        rest = quantity - total;
        document.getElementById('cont').innerHTML =  rest;
        document.getElementById('cont').style.color = 'rgb(255, 0, 0)'
        console.log("entrou no vermelho")
      
    } else if ( total > quantity) {
        rest = quantity - total;        
        document.getElementById('cont').innerHTML = rest;  
        //document.getElementById('msg').value = valor.substr(0,quant);
    }
}

 function autoResize()
    {
        objTextArea = document.getElementById('tweet');
        while (objTextArea.scrollHeight > objTextArea.offsetHeight)
        {
            objTextArea.rows += 1;
        }
    }


function getTweet(){
    document.getElementById("btn").addEventListener("click", publish);
   
};

function publish() {

    texTweet = document.getElementById("tweet").value;
    

    if(texTweet.length >= 1 && texTweet.length <=140){
        let p= document.createElement('p');
        let txtP = document.createTextNode(texTweet);
        p.appendChild(txtP);
        document.getElementById('msgPublish').appendChild(p);
        showTweet ();    
    }else{
       document.getElementById("btn").disabled = true;
    }
    
};
window.onload = getTweet;
  



