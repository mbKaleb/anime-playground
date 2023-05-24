import { useEffect } from "react";
import anime from "animejs";

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
	useEffect(() => {
		anime({
			targets: '#'+svg.props.name,
			strokeDashoffset: [anime.setDashoffset, 10],
			easing: 'easeInOutSine',
			duration: 50000,
			delay: function(el, i) { return i * 250 },
			direction: 'alternate',
			loop: true
		});
	}, [])

	return (
		<div className="flex justify-center">
			{svg}
		</div>
	)
}

export { Box, FlyingBox, LineDrawing };