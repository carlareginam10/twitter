

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
function limite_textarea(valor) {
    quant = 140;
    total = valor.length;
    if(total <= quant) {
        resto = quant - total;
        document.getElementById('cont').innerHTML = resto;
    if(total > 120){
        document.getElementById('cont').innerHTML = resto;
        resto.style.color = 'rgb(255, 0, 0)';  //não está fazendo nada

    }
    } else if ( total > quant) {
        resto = quant - total;
        
        document.getElementById('cont').innerHTML = resto;  
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
     document.getElementById("msg").innerHTML = texTweet;
       
    }else{
        document.getElementById("btn").disabled = true;
    }
    showTweet ();
};
window.onload = getTweet;
  



