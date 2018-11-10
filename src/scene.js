// scene.js

// Set environment in this file
import {
	Scene,
	PerspectiveCamera,
	AmbientLight,
	WebGLRenderer,
	PointLight,
	} from 'three'; 
import OrbitControls from 'orbit-controls-es6';
import * as dat from 'dat.gui';

// ==== scene setup ==== //
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const controls = new OrbitControls(camera);

const light = new AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const renderer = new WebGLRenderer();
renderer.setClearColor(0x0f0f0f, 1);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const lights = [];
lights[ 0 ] = new PointLight( 0xffffff, 1, 0 );
lights[ 1 ] = new PointLight( 0xffffff, 1, 0 );
lights[ 2 ] = new PointLight( 0xffffff, 1, 0 );

lights[ 0 ].position.set( 0, 200, 0 );
lights[ 1 ].position.set( 100, 200, 100 );
lights[ 2 ].position.set( - 100, - 200, - 100 );

scene.add( lights[ 0 ] );
scene.add( lights[ 1 ] );
scene.add( lights[ 2 ] );

camera.position.x = 2.5;
camera.position.y = 4;
camera.position.z = 2.5;
// camera.position.set(5, 20, -30);

// ==== gui setup ==== //
const guiControls =  new function() {
	this.rotationX = 0.01;
	this.rotationY = 0.01;
	this.rotationZ = 0.01;
}

const gui = new dat.GUI();

gui.add(guiControls, 'rotationX', 0, 1);
gui.add(guiControls, 'rotationY', 0, 1);
gui.add(guiControls, 'rotationZ', 0, 1);


// Export variables to be used
exports.scene = scene;
exports.camera = camera;
exports.controls = controls;
exports.renderer = renderer;
exports.gui = gui;
exports.guiControls = guiControls;