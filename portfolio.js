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

var text = "Hi,in this page you can take an indepth view of all of my projects that I have worked on.";
var txt = document.getElementById("type");
setTimeout(function(){txt.innerHTML = text;},2900);
