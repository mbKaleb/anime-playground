import anime from 'animejs';

import useEffect from 'react'

import { Box } from './components/items'
import { FlyingBox } from './components/items'
import { svg1 } from './svgs';

import './App.css'



export default function App() {

  return (
    <div className="App">
      <div className="outline flex justify-center bg-black">
        <FlyingBox svg={svg1}/>
      </div>
    </div>
  );
}
