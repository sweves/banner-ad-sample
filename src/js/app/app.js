import "../../scss/loader.scss";
const json = require("../fonts/fonts.json");

(() => {
  // fonts js
  document.addEventListener("DOMContentLoaded", function() {
    json['google-fonts-plugin'].formats.forEach(function(el) {
      const fontLink = document.createElement("link");
      fontLink.setAttribute("rel", "stylesheet");
      fontLink.setAttribute("href", `fonts/${el}.css`);
      document.getElementsByTagName("head")[0].appendChild(fontLink);
    })
  });

  // video js
  const contentVideo = document.getElementById('video__loop');
  const videoTrigger = document.getElementsByClassName('content__video-trigger')[0];
  const modal = document.getElementsByClassName('content__modal')[0];
  const modalVideo = document.getElementById('video__modal');
  const modalVideoProgress = document.getElementById('video__modal-progress');
  const closeModal = modal.getElementsByClassName('modal__close')[0];

  if(videoTrigger
    && modal
    && modalVideo
    && contentVideo
    ) {
    videoTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.toggle('hidden');
      modalVideo.play();
      contentVideo.pause();
    });
  }

  if(closeModal
    && modal
    && modalVideo
    && contentVideo
    ) {
    closeModal.addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.toggle('hidden');
      modalVideo.pause();
      contentVideo.play();
    });
  }

  modalVideo.addEventListener('timeupdate', function() {
    modalVideoProgress.value = (modalVideo.currentTime / modalVideo.duration) * 100;
  });

  modalVideoProgress.addEventListener('click', function (e) {
    var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
        y = e.pageY - this.offsetTop,  // or e.offsetY
        clickedValue = (x * this.max / this.offsetWidth)/100;

    modalVideo.currentTime = modalVideo.duration * clickedValue;
    //modalVideoProgress.value = clickedValue;
});
})();
