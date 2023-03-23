// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

window.addEventListener("load", doStartup, false);

function doStartup(event) {
  document.fullscreenElement = document.fullscreenElement || document.mozFullscreenElement
    || document.msFullscreenElement || document.webkitFullscreenDocument;
  document.exitFullscreen = document.exitFullscreen || document.mozExitFullscreen
    || document.msExitFullscreen || document.webkitExitFullscreen;

  document.addEventListener("click", handleKeypress, false);
}

function handleKeypress(event) {
  if (event.keyCode === 13) {
    toggleFullscreen();
  }
}


function toggleFullscreen() {
  let elem = document.documentElement;

  elem
    .requestFullscreen({ navigationUI: "show" })
    .then(() => { })
    .catch((err) => {
      alert(
        `An error occurred while trying to switch into fullscreen mode: ${err.message} (${err.name})`
      );
    });
}
function hideButton() {

  document.getElementById('fullscreen-btn').style.visibility = 'hidden';

}
