sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	], function(Controller,MessageToast) {
		"use strict";

		return Controller.extend("ask.view.Ask", {

			onInit: function() {

			},

			onPressAskQuestion: function(){
				jQuery.sap.log.debug("onPressAskQuestion");
				var firebase = this.getOwnerComponent().firebase;
				firebase.child("questions").push(this.getQuestionObject(),$.proxy(this.onCompleteQuestionAsked,this));
			},

			onChangeQuestionType: function(){
				jQuery.sap.log.debug("onChangeQuestionType");
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
				var feedbackText = this.getOwnerComponent().getModel("i18n").getProperty("questionAddedMessage");
				MessageToast.show(feedbackText, {
					duration: 3000, 
					width: "15em",
					my: "center bottom",
					at: "center bottom",
					of: this.byId("butAsk"), 
					offset: "0 0",
					collision: "fit fit",
					onClose: null, 
					autoClose: true, 
					animationTimingFunction: "ease",
					animationDuration: 1000, 
					closeOnBrowserNavigation: true 
				});

				this.clearFields();
			},

			clearFields: function(){
				this.byId("topic").setSelectedKey();
				this.byId("question").setValue();
				this.byId("questionType").setSelectedKey();
			}

		});

});