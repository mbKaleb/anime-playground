import anime from 'animejs';

import useEffect from 'react'

import { Box, FlyingBox, LineDrawing, CrazyLines, CrazyLines2 } from './components/items'
import { svg1, svg2, svg3 } from './svgs';
import { crazylines } from './svgs/crazylines';

import { svgGrid } from './svgs/grid';
import './App.css'

export default function App() {

  return (
    <div className="App bg-black">
      <div>
        {/* <LineDrawing svg={svg3} /> */}
        {/* <CrazyLines svg={svgGrid}/> */}

        <CrazyLines2 svg={svgGrid}/>
      </div>
    </div>
  );
}
