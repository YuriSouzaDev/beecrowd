/* Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos. */

export function problem(lines) {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    if (lines[i] % 2 === 0) {
      total++;
    }
  }

  console.log(`${total} valores pares`);
}
