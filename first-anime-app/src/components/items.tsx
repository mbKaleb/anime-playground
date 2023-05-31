import { useEffect } from "react";
import anime from "animejs";


const Box = (props:any) => {
	const { id } = props;

	return (<>
		<div className="box absolute relative left-1 -top-1 w-2 h-2 outline outline-3 outline-white bg-black" id={id}  ></div>
	</>) 
}




const TextureTest = () => {
	return (
		<div className="">
			Content
		</div>
	)
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
		}
	}, [pathEls])

	useEffect(() => {
			if (pathEls) {
			for (var i = 0; i < pathEls.length; i++) {
				var pathEl:any = pathEls[i];
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