define(function (require, exports, module) {
  var playlist = require("text!../playlist.json");
  // TODO: we need wraparound for the case that we run out of tracks
  var currentTrack = playlist.pop();
  var audio = new Audio();

  function playUrl(url) {
    function canplay() {
      audio.removeEventListener("canplay", canplay);
      audio.play();
    }

    audio.addEventListener("canplay", canplay);
    audio.src = url;
  }

  // When the current track ends, start another
  audio.addEventListener("ended", function() {
    currentTrack = playlist.pop();
    if(!currentTrack) {
      // TODO: No more trackS! We should bubble up error handling to UI somehow...
      console.error("[brackets-wavelength] No more tracks");
      return;
    }
    playUrl(currentTrack.url);
  });

  return {
    play: function() {
      if(!audio.src) {
        playUrl(currentTrack.url);
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
