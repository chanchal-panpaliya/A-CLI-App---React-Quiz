var inputCenter=document.querySelector("#inputtext");
var outputCenter=document.querySelector("#outputtext");
var btnTranslate= document.getElementById('button1');

var serverURL="https://api.funtranslations.com/translate/minion.json";

function constructURL(text){
    var newURL = serverURL+"?text="+encodeURI(text);
    return newURL;
}
function errorHandler(error){
    alert("The server is restricted to only 5 trials per hour if you encounter an error try again after an hour.")
}

function clickHandler(){
    var iv=inputCenter.value;
    var targetURL=constructURL(iv);
    fetch(targetURL).then(response=>response.json()).then(json=>{
        var x=json.contents.translated;
        outputCenter.value=x;
    }).catch(errorHandler)
}

function success() {
    if(inputCenter.value==="") { 
        document.getElementById('button1').disabled = true; 
       } else { 
        document.getElementById('button1').disabled = false;
        btnTranslate.addEventListener("click",clickHandler);
       }
   }

inputCenter.addEventListener("change",success);




