/* Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem. 

 (-b±√(b²-4ac))/(2a)

 https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo/formula-de-bhaskara.jpg

 -B±√1
*/

export function problem(lines) {
  const [A, B, C] = lines[0].split(' ').map(parseFloat);

  function calcularBhaskara(A, B, C) {
    const discriminante = Math.pow(B, 2) - 4 * A * C;
    const divisor = 2 * A;
    const r1 = (-B + Math.sqrt(discriminante)) / divisor;
    const r2 = (-B - Math.sqrt(discriminante)) / divisor;

    if (discriminante < 0 || divisor === 0) {
      console.log('Impossivel calcular');
    } else {
      console.log(`R1 = ${r1.toFixed(5)}`);
      console.log(`R2 = ${r2.toFixed(5)}`);
    }
  }

  calcularBhaskara(A, B, C);
}
