import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight } from 'three/build/three.module';

// scene setup
const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
const renderer = new WebGLRenderer();
const light = new AmbientLight(0x444444);
camera.position.z = 5;
scene.add(light);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// render loop
const update = () =>{
  requestAnimationFrame(update);
  renderer.render(scene, camera);
}

// function calls
update();
