/*

    Rotaty
    content.js

    Created by Hassan El Desouky on 01/01/19.
    Copyright © 2019 Hassan El Desouky. All rights reserved.

*/

//Initializing the rotating angle
let rotateAngle = 90;
let width = 0;
let height = 0;

//Getting messages from 'backgroung.js'
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendRsponse) {
    if (message.txt === "rotate") {
        console.log("rotating");
        let imgClassName = document.querySelectorAll('[data-visualcompletion="media-vc-image"]');
        let img = imgClassName[0];
        rotate(img);
		resize(img);
    }
}

//Rotating function
function rotate(image) {
  
  // check to see if a transform attribute exists
  if (image.hasAttribute("style") && image.style.transform)
  {
	  // take the current angle of the transform and add 90 to it
	  // ASSUMES the transorm is in the form of "rotate(<ANGLE>deg)" where <ANGLE> is the angle to be extracted
	  rotateAngle = parseInt(image.style.transform.replace(/\D/g,'')) + 90;
	  image.style.transform = "rotate(" + rotateAngle + "deg)";
  }
  else
  {
	  width = Math.min(parseInt(image.style.width), parseInt(image.parentElement.style.width));
	  height = Math.min(parseInt(image.style.height), parseInt(image.parentElement.style.height));
	  image.style.transform = "rotate(90deg)";
  }
	  
}

function resize(image) {
	// ASSUMES the image's style attribute has a width and height properties (and it does)
	
	// check for 90 and 270 degrees of rotation
	if (rotateAngle % 180 == 90)
	{	
		if (width > height * 1.2)
		{
			// scale the image width to be equal to the height while keeping the aspect ratio
			let ratio = width / height;
			image.style.width = (1.2 * height) + "px";
			image.style.height = (1.2 * height / ratio) + "px";
			image.parentElement.style.width = image.style.width;
			image.parentElement.style.height = image.style.height;
		}
	}
	else
	{
		// restore original dimensions
		image.style.width = width + "px";
		image.style.height = height + "px";
		image.parentElement.style.width = image.style.width;
		image.parentElement.style.height = image.style.height;
	}	
}
