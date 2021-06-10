import './style.css'

import * as THREE from 'three';



//setting the scene and camera 
const scene =  new THREE.Scene();
const aspect = window.innerWidth/window.innerHeight;
const width = 10;
const height = width * (1/aspect)
const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
camera.position.set(4,4,4);
camera.lookAt(0,0,0);


//rendering the scene and adding to html
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//bare items to the scene yea
const geometry = new THREE.BoxGeometry(3,1,3)
const material = new THREE.MeshLambertMaterial({color:0x333FFF});
const box = new THREE.Mesh(geometry,material);
scene.add(box);

//Lights the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight= new THREE.DirectionalLight(0xf3333f,16);
directionalLight.position.set(1,5,0);
directionalLight.lookAt(0,0,0);
scene.add(directionalLight);

renderer.render(scene, camera);