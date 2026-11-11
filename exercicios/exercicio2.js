// Previsão:
// A
// B
// D
// C
// E

console.log("A");

setTimeout(() => console.log("C"), 200);
setTimeout(() => console.log("D"), 0);

console.log("B");
console.log("E");
