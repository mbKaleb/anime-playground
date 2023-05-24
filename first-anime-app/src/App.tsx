import anime from 'animejs';

import useEffect from 'react'

import { Box, FlyingBox, LineDrawing } from './components/items'
import { svg1, svg2 } from './svgs';

import './App.css'



export default function App() {

  return (
    <div className="App bg-black">
      <div className="outline outline-white flex justify-center ">
        <FlyingBox svg={svg1} id={'id-1'}/>
      </div>
      <div>
        <LineDrawing svg={svg2}/>
      </div>

    </div>
  );
}
