import anime from 'animejs';

import useEffect from 'react'

import { Box, FlyingBox, LineDrawing, CrazyLines } from './components/items'
import { svg1, svg2, svg3, svg5, svg6 } from './svgs';
import './App.css'

export default function App() {

  return (
    <div className="App bg-black">
       <div className="flex justify-center ">
        <FlyingBox svg={svg1} id={'id-1'} />
      </div>
       <div>
        <LineDrawing svg={svg5} />
       </div>
       <div>
        <CrazyLines svg={svg6}/>
       </div>
    </div>
  );
}
