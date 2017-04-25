angular.module('app', ['ngMaterial'])

.controller('AppCtrl', function($scope) {

	$scope.checkboxDemos = [
		[
			{ class: "checkbox-x", id: "cb1-x" },
			{ class: "checkbox-x", id: "cb2-x" },
			{ class: "checkbox-x", id: "cb3-x" },
		],
		[
			{ class: "checkbox-checkmark", id: "cb1-checkmark" },
			{ class: "checkbox-checkmark", id: "cb2-checkmark" },
			{ class: "checkbox-checkmark", id: "cb3-checkmark" },
		],
		[
			{ class: "checkbox-scribble", id: "cb1-scribble" },
			{ class: "checkbox-scribble", id: "cb2-scribble" },
			{ class: "checkbox-scribble", id: "cb3-scribble" },
		],
	];


	var clickTabs = [ 
		{ id: "icon-hamburger", pen: "bWwQJZ" }, 
		{ id:"icon-lock",pen:"qmqRRb" }, 
		{ id:"icon-arrow-rotating", pen:"OmbpdL" }, 
		{ id:"icon-magnifying-glass", pen:"rmWwVR" }, 
		{ id:"icon-folder", pen:"VbmWjj" }, 
		{ id:"icon-recycling", pen:"bWBREL" }, 
		{ id:"icon-speaker", pen:"WjoOoy" }, 
		{ id:"icon-envelope", pen:"JNbJEd" }];
	$scope.clickDemos = clickTabs;
	var clickIframes = [];
	$scope.$watch('selectedClickIndex', function(current, old) {;
		if(clickIframes.length < 1) {
			clickIframes = document.querySelectorAll('.clickDemo');
			for (var i = 0; i < clickTabs.length; i++) {
				clickIframes[i].src = "//codepen.io/bkdiehl/embed/" + clickTabs[i].pen + "/?height=475&theme-id=0&default-tab=js&embed-version=2";		
			}
		}	
	});



	var hoverTabs = [ 
		{ id: "icon-share", pen: "rmWzyW" },
		{ id: "icon-globe", pen: "bWBryV" },
		{ id: "icon-new-document", pen: "OmbxVV" },
		{ id: "icon-link", pen: "JNbrda" },
		{ id: "icon-wrench", pen: "KmNXdW" },
		{ id: "icon-wall", pen: "bWBoEp" },
		{ id: "icon-mobile", pen: "ZKBXWa" },
		{ id: "icon-desktop", pen: "mmOBrb" }];
	$scope.hoverDemos = hoverTabs;
	var hoverIframes = [];
	$scope.$watch('selectedHoverIndex', function(current, old) {
		if(hoverIframes.length < 1) {
			hoverIframes = document.querySelectorAll('.hoverDemo');
			for (var i = 0; i < hoverTabs.length; i++) {
				hoverIframes[i].src = "//codepen.io/bkdiehl/embed/" + hoverTabs[i].pen + "/?height=475&theme-id=0&default-tab=js&embed-version=2";		
			}
		}	
	});


	//tabs for illustrating the different easing options
	var easingTabs = [
		{ id: 'linear', easing: 'linear' },
		{ id: 'easein', easing: 'easein' },
		{ id: 'easeout', easing: 'easeout' },
		{ id: 'easeinout', easing: 'easeinout' },
		{ id: 'backin', easing: 'backin' },
		{ id: 'backout', easing: 'backout' },
		{ id: 'bounce', easing: 'bounce' },
		{ id: 'elastic', easing: 'elastic' },
	];
	$scope.easingDemos = easingTabs;
	$scope.$watch('selectedEasingIndex', function(current, old){
      	if ( current + 1 ) {
			easingIllustrator.easing = easingTabs[current].easing;
			SnapStates(easingIllustrator);
		}
	});


	$scope.setActiveClickDemo = function(index) {
		$scope.selectedClickIndex = index;
	}

	$scope.setActiveHoverDemo = function(index) {
		$scope.selectedHoverIndex = index;
	}




})

