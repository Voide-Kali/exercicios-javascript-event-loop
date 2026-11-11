// Previsão:
// Fim do loop
// 0
// 1
// 2

for (let i = 0; i < 3; i++) {
  // let cria uma variável independente para cada iteração.
  setTimeout(() => console.log(i), 0);
}

console.log("Fim do loop");
