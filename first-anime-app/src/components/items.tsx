import { useEffect } from "react";
import anime from "animejs";

const Box = () => {
	return (<>
		<div className="box absolute relative left-1 -top-1 w-2 h-2 outline outline-1 outline-white bg-black" id="box"  ></div>
	</>) 
}

const FlyingBox = (props:any) => {
	const { svg } = props;
	useEffect(() => {
		const path = anime.path('path');
		anime({
			targets: "#box",
			translateX: path('x'),
			translateY: path("y"),
			duration: 3000,
			loop: true,
			easing: 'linear'
		});
		anime({
			targets: 'path',
			opacity: 0,
			duration: 6000,
			loop: true,
			direction: 'alternate',
			easing: 'easeInOutExpo'
		});
	}, [])

	return (
		<div className="flex justify-center">
			<div className=""><Box /></div>
			<div className="">{svg}</div>ßß
		</div>
	)
}

export { Box, FlyingBox };