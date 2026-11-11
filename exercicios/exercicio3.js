// Previsão:
// A
// B
// C
// D
// E
// F

console.log("A");

setTimeout(() => console.log("F"), 0);

Promise.resolve()
  .then(() => {
    console.log("C");
  })
  .then(() => {
    console.log("D");
  });

console.log("B");
console.log("E");
