  var toggle = document.getElementById("toggle")
  toggle.innerHTML="<img src=\"https://www.solodev.com/assets/anchor/arrow-down.png\" width=\"20px\" height=\"25px\">";

var myText = "I'm Ayush Shankar";
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
