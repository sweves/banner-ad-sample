/**
 *
 * V I D E O  P L A Y E R
 *
 */

(() => {
  const contentVideo = document.getElementById('video__loop'),
    videoTrigger = document.getElementsByClassName('content__video-trigger')[0],
    modal = document.getElementsByClassName('content__modal')[0],
    modalVideo = document.getElementById('video__modal'),
    modalVideoProgress = document.getElementById('video__modal-progress'),
    closeModal = modal.getElementsByClassName('modal__close')[0];

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

  if(modalVideo
    && modalVideoProgress
    ) {
    modalVideo.addEventListener('timeupdate', function() {
      modalVideoProgress.value = (modalVideo.currentTime / modalVideo.duration) * 100;
    });

    modalVideoProgress.addEventListener('click', function (e) {
      const x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        clickedValue = (x * this.max / this.offsetWidth)/100;

      modalVideo.currentTime = modalVideo.duration * clickedValue;
    });
  }
})();
