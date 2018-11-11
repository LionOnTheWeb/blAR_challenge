/*
* Coding challenge details:
*
* 1) Every second, a new cube should render in a random position in the scene. Each cube should be the same size and color, but the position and rotation of the cube should be random.
*
* 2) {DONE} Please add a UI element which allows the user to change the color of the cubes in the scene. When the user selects a new color, all of the cubes that are present in the scene should be given the new color. Please include at least 5 different color options. {DONE}
*
* 3) Please add a UI element which allows the user to grow or shrink the objects in the scene. The user's selected scale should apply to all objects in the scene. Feel free to use a slider, dial, or any other UI implementation of your choosing for this portion of the task.
*
* Author: Asad Richardson
* Date started: Friday, November 9th 2018
*/

import {Raycaster} from 'three';
/**
*
* Index.js for app functions
*
* ==== Imported definitions from the following files ====
* [1] scene.js
* [2] objects.js
*
*/

const objects = require("./objects.js");
const guiControls = objects.guiControls;
const matColor = objects.matColor;

const cube = objects.cube;

// Initiate raycaster
const raycaster = new Raycaster();

// Update loop
const update = () =>{
	cube.rotation.x += guiControls.rotationX;
	cube.rotation.y += guiControls.rotationY;
	cube.rotation.z += guiControls.rotationZ;

	// cube.material.color = guiControls.currColor;
	requestAnimationFrame(update);
	objects.controls.update();
	objects.renderer.render(objects.scene, objects.camera);
}

update();

// displayGUI();