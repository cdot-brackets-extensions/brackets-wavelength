define(function(require, exports, module) {
    "use strict";

    var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

    var visible = false,
        realVisibility = false;

    //jQuery objects
    var $icon;

    //css file import
    ExtensionUtils.loadStyleSheet(module, "./wvstyle.css");

    function _toggleVisibility() {
        visible = !visible;
        _setPanelVisibility(visible);
    }

    // Add toolbar icon
    $icon = $("<a class=\"icon ion-headphone\"></a>")
        .click(_toggleVisibility)
        .appendTo($("#main-toolbar .buttons"));
});
