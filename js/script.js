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

function hideScreenButtonChoiceFullScreen() {
  document.getElementById('full-screen-btn').style.visibility = 'hidden';
  document.getElementById('normal-screen-btn').style.visibility = 'hidden';
  document.getElementById('screen-mode-top-btn').style.backgroundColor = 'transparent'
  document.getElementById('screen-mode-top-btn').style.visibility = 'visible';
  };
  

function hideScreenButtonChoiceNormalScreen() {
  document.getElementById('full-screen-btn').style.visibility = 'hidden';
  document.getElementById('normal-screen-btn').style.visibility = 'hidden';
  document.getElementById('screen-mode-top-btn').style.border = '3px solid red';
  document.getElementById('screen-mode-top-btn').style.backgroundColor = 'transparent'
  document.getElementById('screen-mode-top-btn').style.visibility = 'visible';
};

function toggleFullscreen() {
  let elem = document.documentElement;

  if (!document.fullscreenElement) {
    document.getElementById('screen-mode-top-btn').style.border = '3px solid green';
    document.getElementById('screen-mode-top-btn').style.backgroundColor = 'transparent'
    elem.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
      );
      
    });
  } else {
    document.exitFullscreen();
    document.getElementById('screen-mode-top-btn').style.border = '3px solid red';
    document.getElementById('screen-mode-top-btn').style.backgroundColor ='transparent'
  }
};
