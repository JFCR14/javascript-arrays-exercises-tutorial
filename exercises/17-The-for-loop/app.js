let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];
let sumaElementos = 0;
// Your code here
for (const i of myArray) {
    sumaElementos = sumaElementos + i;
}
console.log(sumaElementos / myArray.length);
