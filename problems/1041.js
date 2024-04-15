/* Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

https://resources.beecrowd.com/gallery/images/problems/UOJ_1041.png

Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

Entrada
A entrada contem as coordenadas de um ponto.

Saída
A saída deve apresentar o quadrante em que o ponto se encontra. */

export function problem(lines) {
  const [X, Y] = lines[0].split(' ').map(parseFloat);

  if (X > 0 && Y > 0) {
    console.log('Q1');
  } else if (X < 0 && Y > 0) {
    console.log('Q2');
  } else if (X < 0 && Y < 0) {
    console.log('Q3');
  } else if (X > 0 && Y < 0) {
    console.log('Q4');
  } else if (X === 0 && Y === 0) {
    console.log('Origem');
  } else if (X === 0) {
    console.log('Eixo Y');
  } else if (Y === 0) {
    console.log('Eixo X');
  }
}
