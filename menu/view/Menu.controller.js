sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("menu.view.Menu", {

        onInit: function() {

        },

        onPressAnswer: function() {
            sap.ui.getCore().byId("shell").setApp(new sap.ui.core.ComponentContainer({
                height: "100%",
                name: "quiz"
            }));
        },

        onPressQuestion: function() {

        },

        onPressStats: function() {
            alert("grafico");
        }
        
    });

});