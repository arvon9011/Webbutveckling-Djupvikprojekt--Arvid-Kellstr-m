import {getinformation} from "./weatherdata.js";

getinformation().then(addText);

function addText(info){
  var text = document.getElementById("temp")
  var tempature = document.createTextNode(info[0] +" °C")

  text.appendChild(tempature);
}