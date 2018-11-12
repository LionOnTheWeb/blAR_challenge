// objects.js

// Set environment objects in this file

// Import environmenet objects
const env = require("./scene.js");

// Set variables based on legacy variables
const controls = env.controls;
const renderer = env.renderer;
const scene = env.scene;
const camera = env.camera;

import {
	BoxGeometry, 
	EdgesGeometry, 
	MeshBasicMaterial, 
	MeshPhongMaterial, 
	LineBasicMaterial,
	LineSegments, 
	Mesh,
	Group
} from 'three';
import * as dat from 'dat.gui';

// ==== gui setup ==== //
const guiControls =  new function() {
	this.rotationX = 0.01;
	this.rotationY = 0.01;
	this.rotationZ = 0.01;

	this.changeColor = '#00ff00';

	this.scale = 1;
}

const gui = new dat.GUI();

// ==== cube setup ==== //
const geometry = new BoxGeometry(1, 1, 1);

const material = new MeshPhongMaterial( {
    color: guiControls.changeColor,
    polygonOffset: true,
    polygonOffsetFactor: 1, // positive value pushes polygon further away
    polygonOffsetUnits: 1
} );

let cube = new Mesh(geometry, material);

const edgeGeometry = new EdgesGeometry(cube.geometry);
const lineMaterial = new LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
const wireframe = new LineSegments( edgeGeometry, lineMaterial );
// add wireframe mesh to the cube

let group = new Group();

export default function addRandomCube(){
	window.setInterval(function(){

		let cube = new Mesh(geometry, material);
		let wireframe = new LineSegments( edgeGeometry, lineMaterial );

		let x = Math.random() * 5;
		let y = Math.random() * 5;
		let z = Math.random() * 5;

		// Randomize cube placement and orientation
		cube.position.set(x, y, z);
		cube.rotation.set(x, y, z);
		cube.scale.set(1, 1, 1);

		cube.add(wireframe);
		group.add(cube);
		scene.add(group);

	}, 1000);
}

addRandomCube();

// Change cube color with gui controls 
gui.addColor(guiControls, 'changeColor')
	.name('Change Color')
	.listen()
	.onChange(function(e) {
		cube.material.color.setStyle(e);
	});
	
// gui.add(guiControls, 'chooseColor');

// gui.add(guiControls, 'rotationX', 0.01, 1);
// gui.add(guiControls, 'rotationY', 0.01, 1);
// gui.add(guiControls, 'rotationZ', 0.01, 1);

gui.add(guiControls, 'scale', 0.1, 5).name("Scale Cubes");

controls.update();

// Export legacy variables to be used in next file
exports.controls = controls;
exports.renderer = renderer;
exports.scene = scene;
exports.camera = camera;
exports.cube = cube;
exports.gui = gui;
exports.guiControls = guiControls;
exports.group = group;