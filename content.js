/*

    Rotaty
    content.js

    Created by Hassan El Desouky on 01/01/19.
    Copyright © 2019 Hassan El Desouky. All rights reserved.

*/

//Initializing the rotating angle
let rotateAngle = 90;

//Getting messages from 'backgroung.js'
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendRsponse) {
    if (message.txt === "rotate") {
        console.log("rotating");
        let imgClassName = document.getElementsByClassName("spotlight");
        let img = imgClassName[0];
        rotate(img);
    }
}

//Rotating function
function rotate(image) {
  image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
  rotateAngle = rotateAngle + 90;
}
