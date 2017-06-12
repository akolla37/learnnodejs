//ArrayBuffer is V8 feature and not Node
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;

console.log(view);
console.log(buffer);