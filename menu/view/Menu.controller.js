sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("menu.view.Menu", {

        onInit: function() {

        },

        onPressAnswer: function() {
            jQuery.sap.log.debug("onPressAnswer clicked");
            sap.ui.getCore().byId("shell").setApp(new sap.ui.core.ComponentContainer({
                height: "100%",
                name: "quiz"
            }));
        },

        onPressQuestion: function() {
            jQuery.sap.log.debug("onPressQuestion clicked");
        },

        onPressStats: function() {
            jQuery.sap.log.debug("onPressStats clicked");
        }

    });

});