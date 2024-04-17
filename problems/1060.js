/* Faça um programa que mostre os números pares entre 1 e 100, inclusive.

Entrada
Neste problema extremamente simples de repetição não há entrada.

Saída
Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha. */

export function problem(lines) {
  let total = 0;
  lines.map((item) => {
    if (item > 0) {
      total += 1;
    }
  });

  console.log(`${total} valores positivos`);
}
