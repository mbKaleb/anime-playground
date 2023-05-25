import { useEffect } from "react";
import anime from "animejs";
import { log } from "console";
import { resolveModuleNameFromCache } from "typescript";

const Box = (props:any) => {
	const { id } = props;

	return (<>
		<div className="box absolute relative left-1 -top-1 w-2 h-2 outline outline-3 outline-white bg-black" id={id}  ></div>
	</>) 
}

const FlyingBox = (props:any) => {

	const { svg, id } = props;
	useEffect(() => {
		const path = anime.path("#" + svg.props.name);

		anime({
			targets: "#"+id,
			translateX: path('x'),
			translateY: path("y"),
			duration: 4000,
			loop: true,
			easing: 'linear'
		});
		anime({
			targets: '#' + svg.props.name,
			opacity: .4,
			duration: 1000,
			loop: true,
			direction: 'alternate',
			easing: 'easeInOutExpo'
		});
	}, [])

	return (
		<div className="flex justify-center">
			<div className=""><Box id={id} /></div>
			<div className="">{svg}</div>
		</div>
	)
}

const LineDrawing = (props:any) => {
	const { svg } = props;
	let el = document.getElementById(svg?.props.name);
	
	useEffect(() => {
		if (typeof el === ("object" || null || "undefined")) {
			el = document.getElementById(svg?.props.name);
			console.log('ran')
		} else {
			throw(new Error("Data did not load in runtime"))
		}
	}, [])

	useEffect(() => {
		if (typeof el !== ("object" || null || "undefined")) {
			el = document.getElementById(svg?.props.name);
		}
		anime({
			targets: el,
			strokeDashoffset: [anime.setDashoffset, 10],
			easing: 'easeInOutSine',
			duration: 50000,
			delay: function(el, i) { return i * 250 },
			direction: 'alternate',
			loop: true
		});
	}, [el])

	return (
		<div className="flex justify-center outline outline-1 outline-white ">
			{svg}
		</div>
	)
}


const NewLineDrawing = (props:any) => {
	const { svg } = props;
	let el = document.getElementById(svg?.props.name);
	
	useEffect(() => {
		if (typeof el === ("object" || null || "undefined")) {
			el = document.getElementById(svg?.props.name);
			console.log('ran')
		} else {
			throw(new Error("Data did not load in runtime"))
		}
	}, [])

	useEffect(() => {
		if (typeof el !== ("object" || null || "undefined")) {
			el = document.getElementById(svg?.props.name);
		}
		anime({
			targets: el,
			strokeDashoffset: [anime.setDashoffset, 10],
			easing: 'easeInOutSine',
			duration: 50000,
			delay: function(el, i) { return i * 250 },
			direction: 'alternate',
			loop: true
		});
	}, [el])

	return (
		<div className="flex justify-center outline outline-1 outline-white ">
			{svg}
		</div>
	)
}



const CrazyLines = (props:any) => {
	const { svg } = props;

	let pathEls = document.querySelector("#" + svg.props.name)?.children[0].childNodes 

	useEffect(() => {
		if (typeof pathEls === "undefined") {
			pathEls = document.querySelector("#" + svg.props.name)?.children[0].childNodes 
			console.log(pathEls)
		}
	}, [pathEls])

	useEffect(() => {
			if (pathEls) {
			for (var i = 0; i < pathEls.length; i++) {
				var pathEl:any = pathEls[i];
				console.log(pathEl)
				var offset = anime.setDashoffset(pathEl);
				pathEl.setAttribute('stroke-dashoffset', offset);
				anime({
					targets: pathEl,
					strokeDashoffset: [offset, 0],
					duration: anime.random(6000, 10000),
					delay: anime.random(0, 2000),
					loop: true,
					direction: 'alternate',
					easing: 'easeInOutSine',
					autoplay: true
				});
			}
			}
		}, [])

	return (
		<div className="flex-0" >
			{svg}
		</div>
	)
}


const CrazyLines2 = (props:any) => {
	const { svg } = props;
	let pathEls:any
	console.log(svg.props.name)

	useEffect(() => {
		pathEls = document.querySelector("#" + svg.props.name)?.childNodes[0]?.childNodes[0]?.childNodes
		console.log(pathEls)
	}, [svg])

	useEffect(() => {
		if (pathEls) {
		for (var i = 0; i < pathEls.length; i++) {
			var pathEl:any = pathEls[i];
			
			pathEl.setAttribute("stroke", "#7DFDFE")

			// console.log(pathEl)
			var offset = anime.setDashoffset(pathEl);
			pathEl.setAttribute('stroke-dashoffset', offset);
			anime({
				targets: pathEl,
				strokeDashoffset: [anime.setDashoffset, 0],
				duration: 6000,
				loop: true,
				direction: 'alternate',
				easing: 'easeInOutSine',
				autoplay: true
			});
		}
		}
		}, [])

	return (
		<div className="flex-0" >
			{svg}
		</div>
	)
}



export { Box, FlyingBox, LineDrawing, CrazyLines, CrazyLines2 };



{/*GOOD <path 
stroke="#1AA5D0" 
d="M894.01 374l49.8-49.44a5.52 5.52 0 0 1 3.37-1.4h92.41c1.09 0 2.6.63 3.38 1.4l27.18 26.99" 
stroke-dasharray="208.34030151367188" 
stroke-dashoffset="208.34030151367188" 
style="stroke-dashoffset: 25.217013px;"></path> */}

{/* <path 
d="M 16000,6061.52 9411.87,7851.13 9408.79,7839.77 16000,6049.32 v 12.2" 
id="path326" 
stroke-dasharray="13680.9033203125" 
stroke-dashoffset="13680.9033203125" 
style="stroke-dashoffset: 202.556856px;"></path> */}