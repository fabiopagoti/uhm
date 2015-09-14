sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	], function(Controller,MessageToast) {
		"use strict";

		return Controller.extend("ask.view.Ask", {

			onPressAskQuestion: function(){
				jQuery.sap.log.debug("onPressAskQuestion");

				var firebase = this.getOwnerComponent().firebase;
				firebase.child("questions")
				.push(	this.getQuestionObject(),
					$.proxy(this.onCompleteQuestionAsked,this)
					);

			},

			getQuestionObject: function (){
				jQuery.sap.log.debug("getQuestionObject");

				return {
					topic: [this.byId("topic").getSelectedKey()],
					text: this.byId("question").getValue(),
					options: this.getOptions()
				};
			},

			getOptions: function(){
				var optionsModel = this.getView().getModel("options");
				var options = optionsModel.getData();
				var optionsArray = new Array();

				for (var i = 0; i < options.length; i++) {
					if (options[i].value !== "") {
						optionsArray.push(options[i].value);
					};
				};

				return optionsArray;
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
			},

			_removeOptionIfNeeded: function(option){
				// if value is empty, remove the option
				if (option.getValue() !== "") {
					return;
				}

				var model = option.getModel("options");
				var data = model.getData();
				var indexOfOptionToBeRemoved = arrayObjectIndexOf(data,option.getValue(),"value");

				if (indexOfOptionToBeRemoved !== 0 && 
					indexOfOptionToBeRemoved !== 1) {
					// remove option
					data.splice(indexOfOptionToBeRemoved,1);
				}

				function arrayObjectIndexOf(myArray, searchTerm, property) {
					for(var i = 0, len = myArray.length; i < len; i++) {
						if (myArray[i][property] === searchTerm) return i;
					}
					return -1;
				};

			},

			_addOptionIfNeeded: function(option){

				var options = this.byId("optionsContainer");

				// get number of options
				var numberOfOptions = options.getItems().length;

				// get current option index
				var optionIndex = options.indexOfItem(option);

				if (numberOfOptions === (optionIndex + 1) ) {

					var model = option.getModel("options");
					var newData = model.getData().push({
						placeholder: "Option " + (numberOfOptions + 1),
						value: ""
					});

					// create new option
					// model.setData(newData,true);
				};
			},

			onChangeOption: function(e){
				var changedInput = e.getSource();

				this._removeOptionIfNeeded(changedInput);

				this._addOptionIfNeeded(changedInput);

			}

		});

});