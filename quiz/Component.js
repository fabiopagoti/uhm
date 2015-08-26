sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    "use strict";
    return UIComponent.extend("quiz.Component", {
        metadata: {
            manifest: "json"
        },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
            this.firebase = new Firebase('https://uhm.firebaseio.com');
           var oConsumo = this.firebase.child('questions');
            
           

           oConsumo.on('value', function(snap) {
            var questionsQuiz = snap.val();
            var questionsModel = new JSONModel(questionsQuiz);
            this.setModel(questionsModel,"questionsQuiz");
          });
            
        }
    });
});
