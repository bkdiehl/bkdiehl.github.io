{
	transitionTime:500,
	easing: 'elastic',
	states: {
		close: [
			{ id: 'top-left-in', element: ".top-left", x: 5, y: 5 },
			{ id: 'top-right-in', element: ".top-right", x: -5, y: 5 },
			{ id: 'bottom-left-in', element: ".bottom-left", x: 5, y: -5 },
			{ id: 'bottom-right-in', element: ".bottom-right", x: -5, y: -5 },
			{ id: 'left-in', element: ".left", x: 5 },
			{ id: 'right-in', element: ".right", x: -5 },
		],
		open: [
			{ id: 'revert', element: "rect", x: 0, y:0 },
		]
	},
	events: [
		{ event: 'mouseenter', state: "close" },
		{ event: 'mouseleave', state: "open" },
	]
}