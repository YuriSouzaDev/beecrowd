/* Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal. */

export function problem(lines) {
  const [A, B, C] = lines.toString().split(' ').map(parseFloat);
  const pi = 3.14159;

  function calcularArea(A, B, C) {
    const trianguloArea = (A * C) / 2;
    const circuloArea = pi * C ** 2;
    const trapezioArea = ((A + B) * C) / 2;
    const quadradoArea = B ** 2;
    const retanguloArea = A * B;

    console.log(`TRIANGULO: ${trianguloArea.toFixed(3)}`);
    console.log(`CIRCULO: ${circuloArea.toFixed(3)}`);
    console.log(`TRAPEZIO: ${trapezioArea.toFixed(3)}`);
    console.log(`QUADRADO: ${quadradoArea.toFixed(3)}`);
    console.log(`RETANGULO: ${retanguloArea.toFixed(3)}`);
  }

  calcularArea(A, B, C);
}
