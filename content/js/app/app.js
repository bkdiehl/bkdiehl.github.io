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


	var clickTabs = [ {id: "icon-hamburger"}, {id:"icon-lock"}, {id:"icon-arrow-rotating"}, {id:"icon-magnifying-glass"}, {id:"icon-folder"}, {id:"icon-recycling"}, {id:"icon-speaker"}, {id:"icon-envelope"}]
	$scope.clickDemos = clickTabs;
	$scope.$watch('selectedClickIndex', function(current, old) {;
		if(current + 1) {
			if(clickTabs[current].schema === undefined)
				clickTabs[current].schema = document.getElementById(clickTabs[current].id).innerHTML;
		}
	});



	var hoverTabs = [ {id: "icon-share"}, {id: "icon-globe"}, {id: "icon-new-document"}, {id: "icon-link"}, {id: "icon-wrench"}, {id: "icon-wall"}, {id: "icon-mobile"}, {id: "icon-desktop"} ];
	$scope.hoverDemos = hoverTabs;
	$scope.$watch('selectedHoverIndex', function(current, old) {
		if(current + 1) {
			if(hoverTabs[current].schema === undefined)
				hoverTabs[current].schema = document.getElementById(hoverTabs[current].id).innerHTML;
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

