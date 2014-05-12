define(function (require, exports, module) {
  var playlist;
  var currentTrack;
  var audio = new Audio();

  function playNextTrack() {
    function canplaythrough() {
      audio.removeEventListener("canplaythrough", canplaythrough);
      audio.play();
    }

    // If the playlist is not yet loaded, or all tracks have been
    // consumed, (re)load it.
    if(!playlist || !playlist.length) {
      playlist = require("text!../playlist.json");
    }

    currentTrack = playlist.pop();

    audio.addEventListener("canplaythrough", canplaythrough);
    audio.src = currentTrack.url;
  }

  // When the current track ends, start another
  audio.addEventListener("ended", function() {
    playNextTrack();
  });

  return {
    play: function() {
      if(!audio.src) {
        playNextTrack();
      } else {
        audio.play();
      }
    },
    pause: function() {
      audio.pause();
    },
    get paused() {
      return audio.paused;
    },
    get trackInfo() {
      return currentTrack;
    }
  };
});
