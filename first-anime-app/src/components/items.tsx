import { useEffect } from "react";
import anime from "animejs";

const Box = () => {
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
	return (<>
		<div className="box absolute top-1 left-79 w-2 h-2 bg-gray-400" id="box"  ></div>
	</>) 
}


const Box2 = () => {
	return (<>
		<div className="box absolute top-1 left-79 w-2 h-2 bg-gray-400" id="box"  ></div>
	</>) 
}

const FlyingBox = (svg:any) => {
	
	return (
		<div className="absolute flex justify-center ">
			<Box2 />
			<>{svg}</>
		</div>
	)
}

export { Box, FlyingBox };