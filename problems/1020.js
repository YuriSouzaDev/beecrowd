/* Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido. */

export function problem(lines) {
  const [N] = lines.map(Number);

  function idadeEmDias(dias) {
    let resto = 0;
    const ano = Math.floor(dias / 365);
    resto = dias % 365;
    const mes = Math.floor(resto / 30);
    const dia = Math.floor(resto % 30);
    console.log(`${ano} ano(s)`);
    console.log(`${mes} mes(es)`);
    console.log(`${dia} dia(s)`);
  }

  idadeEmDias(N);
}
