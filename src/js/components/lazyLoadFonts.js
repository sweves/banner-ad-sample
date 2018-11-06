/**
 *
 * L A Z Y  L O A D  F O N T S
 *
 */

const json = require("../fonts/fonts.json");

function lazyLoadFonts() {
  document.addEventListener("DOMContentLoaded", function() {
    json['google-fonts-plugin'].formats.forEach(function(el) {
      const fontLink = document.createElement("link");
      fontLink.setAttribute("rel", "stylesheet");
      fontLink.setAttribute("href", `fonts/${el}.css`);
      document.getElementsByTagName("head")[0].appendChild(fontLink);
    })
  });
}

(() => {
  lazyLoadFonts();
})();
