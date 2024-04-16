/* Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado. */

export function problem(lines) {
  const newArr = lines[0].split(' ').map(Number);
  let sortedArr = [...newArr].sort((a, b) => a - b);
  sortedArr.forEach((n) => console.log(n));
  console.log('\n');
  console.log(`\n${A}`);
  console.log(B);
  console.log(C);
}
