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
            jQuery.sap.log.debug("init ask component");

            UIComponent.prototype.init.apply(this, arguments);
            // this.getRouter().initialize();
            this.firebase = new Firebase('https://uhm.firebaseio.com');

            var topics = this.firebase.child("topics");
            topics.on("value",this.loadTopics,this);

            this.loadOptions();
        },

        loadTopics: function(snap){
            jQuery.sap.log.debug("loadTopics");

            var topics = snap.val();
            var topicsModel = new JSONModel(topics);
            this.setModel(topicsModel,"topics");
        },

        loadOptions: function(){
            var options = new JSONModel([
            {
                value: "",
                placeholder: "Option 1"
            },
            {
                value: "",
                placeholder: "Option 2"
            }
            ]);

            this.setModel(options,"options");
        }
    });
});
