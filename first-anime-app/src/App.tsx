

// import { Box, FlyingBox, LineDrawing, CrazyLines, CrazyLines2 } from './components/items'
import { svg1, svg2, svg3 } from './svgs';
import { crazylines } from './svgs/crazylines';
import { background } from './svgs/background';

import * as THREE from 'three'

import { useEffect } from 'react';

// import {TextureTest} from "./components/items"

import { svgGrid } from './svgs/grid';
import './App.css'

export default function App() {


  // useEffect(() => {
    
    
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
  //   const renderer = new THREE.WebGLRenderer();
  //   document.body.appendChild(renderer.domElement);
    
  //   const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //   const cube = new THREE.Mesh( geometry, material );
  //   scene.add( cube );
    
  //   camera.position.z = 4;

    
    
  //   function animate() {
  //     requestAnimationFrame( animate );
  //     renderer.render( scene, camera );
  //   }
  //   animate()
  // }, [])

  return (
    <div className="App bg-white w-[100vw]">
      <canvas id="myThreeJsCanvas"/>
        {background}
    </div>
  );
}
