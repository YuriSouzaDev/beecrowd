/* Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia = https://resources.beecrowd.com/gallery/images/problems/UOJ_1015.png

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal. */

export function problem(lines) {
  const [X1, Y1] = lines[0].split(' ').map(parseFloat);
  const [X2, Y2] = lines[1].split(' ').map(parseFloat);

  function calcularDistancia(X1, X2, Y1, Y2) {
    const calculop1 = Math.pow(X2 - X1, 2);
    const calculop2 = Math.pow(Y2 - Y1, 2);
    const calculoRaiz = Math.sqrt(calculop1 + calculop2);

    console.log(`${calculoRaiz.toFixed(4)}`);
  }

  calcularDistancia(X1, X2, Y1, Y2);
}
