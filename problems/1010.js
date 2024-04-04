/* Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto. */

export function problem(lines) {
  const [codePiece1, quantifyPiece1, valorPiece1] = lines[0].split(' ');
  const [codePiece2, quantifyPiece2, valorPiece2] = lines[1].split(' ');

  function calcularValor(qt1, val1, qt2, val2) {
    const valor1 = parseInt(qt1) * parseFloat(val1);
    const valor2 = parseInt(qt2) * parseFloat(val2);
    const valorAPagar = valor1 + valor2;
    console.log(`VALOR A PAGAR: R$ ${valorAPagar.toFixed(2)}`);
  }

  calcularValor(quantifyPiece1, valorPiece1, quantifyPiece2, valorPiece2);
}
