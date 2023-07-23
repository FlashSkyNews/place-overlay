// ==UserScript==
// @name         r/papaplatte Overlay
// @namespace    http://tampermonkey.net/
// @version      8.5
// @description  try to take over the canvas!
// @author       placeDE Devs <3 danke jungs
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/PlaceDE-Official/place-overlay/raw/main/src/scripts/placeDE-overlay.user.js
// @downloadURL  https://github.com/PlaceDE-Official/place-overlay/raw/main/src/scripts/placeDE-overlay.user.js
// ==/UserScript==

var overlayImage = null;
var overlayButton = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
        overlayImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1500px;pointerEvents: 'none';`;
        canvasContainer.appendChild(overlayImage);
        overlayButton = document.createElement("button");
        overlayButton.style = "position: absolute; top: 28px;left: 80px;border-radius: 0;border: 3px solid black;padding: 4px 10px;height: fit-content;";
        overlayButton.textContent = "Overlay: an";
        overlayButton.addEventListener('click', () => {toggleOverlay();});
        window.document.body.append( overlayButton );
    }, false);
}

function updateImage() {
    overlayImage.src = "https://place.kayo.zip/outputs/overlay_target.png?" + Date.now()
}

function toggleOverlay() {
    if( overlayImage.style.display == "none" ) {
        overlayImage.style.display = "block";
        overlayButton.textContent = "Overlay: an";
    } else {
        overlayImage.style.display = "none";
        overlayButton.textContent = "Overlay: aus";
    }
}


setInterval(function () {overlayImage.src = "https://place.kayo.zip/outputs/overlay_target.png?" + Date.now()}, 30000);
