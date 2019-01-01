/*

    Rotaty
    background.js

    Created by Hassan El Desouky on 01/01/19.
    Copyright © 2019 Hassan El Desouky. All rights reserved.

*/

//Adding action on the icon
chrome.browserAction.onClicked.addListener(iconClicked);

//Sending the message to the 'content.js' file
function iconClicked(tab) {
    console.log("iconClicked");
    let msg = {
        txt: "rotate"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}