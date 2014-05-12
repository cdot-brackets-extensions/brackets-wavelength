define(function (require, exports, module) {
  var playlist = require("text!../playlist.json");
  var currentTrack = playlist[0];
  var audio = new Audio();
  return {
    play: function() {
      if(!audio.src) {
        audio.src = currentTrack.url;
      }
      audio.play();
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
