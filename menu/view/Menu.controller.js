(function() {
	"use strict";

	sap.ui.controller("menu.view.Menu", {

		
		 onInit: function() {
		 	
  			
		 },

		
     onQuizPress:function(){
    	 
    	 var CController = Controller.extend("sap.m.sample.NavContainer.C", {

    			handleNav: function(evt) {
    				var navCon = this.getView().byId("navCon");
    				var target = evt.getSource().data("target");
    				if (target) {
    					navCon.to(this.getView().byId(target));
    				} else {
    					navCon.back();
    				}
    			}
    		});


    		return CController;
     },
     
     onCadPress: function() {
		alert("cadastro");
	},
	
	 onGraficPress: function() {
		alert("grafico");
	}
		
		
	});
}());