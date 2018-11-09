/** Import definitions from the following files
* [1] scene.js
* [2] objects.js
*/
const objects = require("./objects.js");

// Update loop
const update = () =>{
  requestAnimationFrame(update);
  objects.controls.update();
  objects.renderer.render(objects.scene, objects.camera);
}

update();