/* Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”. */

export function problem(lines) {
  const [N] = lines.map(Number);

  const cedulas = [100, 50, 20, 10, 5, 2, 1];
  let resto = N;

  console.log(N);
  for (let i = 0; i < cedulas.length; i++) {
    const quantidadeCedulas = Math.floor(resto / cedulas[i]);
    resto %= cedulas[i];
    console.log(`${quantidadeCedulas} nota(s) de R$ ${cedulas[i]},00`);
  }

  // const cedulas100 = Math.floor(N / 100);
  // resto = N % 100;
  // const cedulas50 = Math.floor(resto / 50);
  // resto = resto % 50;
  // const cedulas20 = Math.floor(resto / 20);
  // resto = resto % 20;
  // const cedulas10 = Math.floor(resto / 10);
  // resto = resto % 10;
  // const cedulas5 = Math.floor(resto / 5);
  // resto = resto % 5;
  // const cedulas2 = Math.floor(resto / 2);
  // resto = resto % 2;
  // const cedulas1 = Math.floor(resto / 1);
  // resto = resto % 1;

  // console.log(N);
  // console.log(`${cedulas100} nota(s) de R$ 100,00`);
  // console.log(`${cedulas50} nota(s) de R$ 50,00`);
  // console.log(`${cedulas20} nota(s) de R$ 20,00`);
  // console.log(`${cedulas10} nota(s) de R$ 10,00`);
  // console.log(`${cedulas5} nota(s) de R$ 5,00`);
  // console.log(`${cedulas2} nota(s) de R$ 2,00`);
  // console.log(`${cedulas1} nota(s) de R$ 1,00`);
}
