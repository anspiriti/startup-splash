// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

function hideScreenButtonChoiceFullScreen() {
  document.getElementById('full-screen-btn').style.visibility = 'hidden';
  document.getElementById('normal-screen-btn').style.visibility = 'hidden';
  document.getElementById('screen-mode-top-btn').style.visibility = 'visible';
  };
  

function hideScreenButtonChoiceNormalScreen() {
  document.getElementById('full-screen-btn').style.visibility = 'hidden';
  document.getElementById('normal-screen-btn').style.visibility = 'hidden';
  document.getElementById('screen-mode-top-btn').style.border = '3px solid red';
  document.getElementById('screen-mode-top-btn').style.visibility = 'visible';
};

function toggleFullscreen() {
  let elem = document.documentElement;

  if (!document.fullscreenElement) {
    document.getElementById('screen-mode-top-btn').style.border = '3px solid green';
    elem.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
      );
      
    });
  } else {
    document.exitFullscreen();
    document.getElementById('screen-mode-top-btn').style.border = '3px solid red';
  }
};
