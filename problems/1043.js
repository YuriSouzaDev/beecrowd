/* Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal. */

export function problem(lines) {
  const [A, B, C] = lines[0].split(' ').map(parseFloat);
  if (A < B + C && B < A + C && C < A + B) {
    const perimetro = A + B + C;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
  } else {
    const area = ((A + B) * C) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
  }
}
