import "../../scss/loader.scss";
const json = require("../fonts/fonts.json");

(() => {
  document.addEventListener("DOMContentLoaded", function() {

    json['google-fonts-plugin'].formats.forEach(function(el) {
      console.log(el);
      const fontLink = document.createElement("link");
      fontLink.setAttribute("rel", "stylesheet");
      fontLink.setAttribute("href", `fonts/${el}.css`);
      document.getElementsByTagName("head")[0].appendChild(fontLink);
    })
  });
})();
