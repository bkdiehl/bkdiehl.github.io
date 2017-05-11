{
	transitionTime:600,
	easing:"linear",
	states: {
		draw: [
			{ id: "draw", element: ".scribble", drawPath:100 },
		],
		hide: [
			{ id:"hide", element: ".scribble", drawPath:0, transitionTime:0 },
		]
	},
	events: [
		{ event:'change', state: ["draw", "hide"], selector: '.checkbox-selector' }
	]
}