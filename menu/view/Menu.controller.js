(function() {
  "use strict";

  sap.ui.controller("menu.view.Menu", {


    onInit: function() {

    },


    onQuizPress: function() {
      sap.ui.getCore().byId("shell").setApp(new sap.ui.core.ComponentContainer({
        height: "100%",
        name: "quiz"
      }));
    },

    onCadPress: function() {
      alert("cadastro");
    },

    onGraficPress: function() {
      alert("grafico");
    }


  });
}());