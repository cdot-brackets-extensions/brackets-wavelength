define(function(require, exports, module) {
    "use strict";

    var music = require("./lib/music");

    var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

    //jQuery objects
    var $icon;

    //css file import
    ExtensionUtils.loadStyleSheet(module, "./resources/css/style.css");

    function _togglePlay() {
        if(music.paused) {
            music.play();
        } else {
            music.pause();
        }
        $icon.attr("title", music.trackInfo.name);
    }

    // Add toolbar icon
    $icon = $("<a class=\"icon ion-headphone\"></a>")
    .click(_togglePlay)
    .appendTo($("#main-toolbar .buttons"));
    $icon.attr("title", "No playlist loaded!");
});
