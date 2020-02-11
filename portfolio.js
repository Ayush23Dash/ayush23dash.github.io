var myText = "Welcome to my Portfolio";
var myArray = myText.split("");
var loopTimer;
function frameLooper()
{
  if(myArray.length>0)
  {
    document.getElementById("type_text").innerHTML += myArray.shift();
  }else{
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout('frameLooper()',130);
}
frameLooper();

var text = "Dandelion is a modern theme for the Ghost blogging platform. It is fully responsive and loads blazing fast! This theme features modern animations, a classic serif font, custom post layouts and more.";
var txt = document.getElementById("type");
setTimeout(function(){txt.innerHTML = text;},2900);
