sap.ui.define([
	"sap/ui/core/mvc/Controller"
	], function(Controller) {
		"use strict";

		return Controller.extend("ask.view.Ask", {

			onInit: function() {

			},

			onPressAskQuestion: function(){
				jQuery.sap.log.debug("onPressAskQuestion");
				var firebase = this.getOwnerComponent().firebase;
				firebase.child("questions").push(this.getQuestionObject(),this.onCompleteQuestionAsked);
			},

			getQuestionObject: function(){
				jQuery.sap.log.debug("getQuestionObject");
				return {
					topic: [this.byId("topic").getSelectedKey()],
					text: this.byId("question").getValue(),
					type: this.byId("questionType").getSelectedKey(),
					answer: ["A"]
				};
			},

			onCompleteQuestionAsked: function(e){
				jQuery.sap.log.debug("onCompleteQuestionAsked");
			}

		});

	});