// objects.js

// Set environment objects in this file

// Import environmenet objects
const env = require("./scene.js");
// Set legacy variables for exporting
const controls = env.controls;
const renderer = env.renderer;
const scene = env.scene;
const camera = env.camera;
const gui = env.gui;
const guiControls = env.guiControls;

import {
	BoxGeometry, 
	EdgesGeometry, 
	MeshBasicMaterial, 
	MeshPhongMaterial, 
	LineBasicMaterial,
	LineSegments, 
	Mesh
} from 'three';

// cube setup
const geometry = new BoxGeometry(1, 1, 1);

const material = new MeshPhongMaterial( {
    // color: 0x00ff00,
    color: guiControls.changeColor,
    polygonOffset: true,
    polygonOffsetFactor: 1, // positive value pushes polygon further away
    polygonOffsetUnits: 1
} );
// add wireframe mesh to the cube

let cube = new Mesh(geometry, material);


const edgeGeometry = new EdgesGeometry(cube.geometry);
const lineMaterial = new LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
const wireframe = new LineSegments( edgeGeometry, lineMaterial );

cube.add(wireframe);

export default function addRandomCube(){
	console.log("addrandomcube has been called");
	window.setInterval(function(){

		let cube = new Mesh(geometry, material);
		cube.add(wireframe);

		let x = Math.random() * 100;
		let y = Math.random() * 100;
		let z = Math.random() * 100;

		cube.position.set(x, y, z);
		cube.rotation.set(x, y, z);
		scene.add(cube);

	}, 1000);
}

addRandomCube();


// Change cube color with gui controls 
gui
	.addColor(guiControls, 'changeColor')
	.listen()
	.onChange(function(e) {
		cube.material.color.setStyle(e);
	});

env.controls.update();


// Export legacy variables to be used
exports.controls = controls;
exports.renderer = renderer;
exports.scene = scene;
exports.camera = camera;
exports.cube = cube;
exports.gui = gui;
exports.guiControls = guiControls;