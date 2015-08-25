sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function(UIComponent,JSONModel) {
    "use strict";
    return UIComponent.extend("ask.Component", {
        metadata: {
            manifest: "json"
        }, 
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
            // this.getRouter().initialize();
            this.firebase = new Firebase('https://uhm.firebaseio.com');

            var questionType = this.firebase.child("questionType");
            questionType.on("value",this.loadQuestionTypes,this);
        },

        loadQuestionTypes: function(snap){
            var questionTypes = snap.val();
            var questionTypeModel = new JSONModel(questionTypes);
            this.setModel(questionTypeModel,"questionType");
        }
    });
});
