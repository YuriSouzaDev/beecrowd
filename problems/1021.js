/* Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido. */

export function problem(lines) {
  const [N] = lines.map(Number);

  const cedulas = [100, 50, 20, 10, 5, 2];
  const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

  let resto = N;

  console.log('NOTAS:');
  for (let i = 0; i < cedulas.length; i++) {
    const quantidadeCedulas = Math.floor(resto / cedulas[i]);
    resto %= cedulas[i];
    console.log(`${quantidadeCedulas} nota(s) de R$ ${cedulas[i].toFixed(2)}`);
  }

  console.log('MOEDAS:');
  for (let i = 0; i < cedulas.length; i++) {
    const quantidadeMoedas = Math.floor(+resto.toFixed(2) / moedas[i]);
    resto %= moedas[i];
    console.log(`${quantidadeMoedas} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
  }
}
