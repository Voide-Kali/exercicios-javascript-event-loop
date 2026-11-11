// Previsão:
// A
// B
// C
// D

async function executar() {
  console.log("B");

  await null;

  console.log("D");
}

console.log("A");

executar();

console.log("C");

// O código síncrono continua após a chamada da função async.
// O await suspende a continuação da função e a agenda como microtask.
