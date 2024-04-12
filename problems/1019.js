/* Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido. */

export function problem(lines) {
  const [N] = lines.map(Number);

  function conversaoTempo(duracao) {
    let resto = 0;
    const horas = Math.floor(duracao / 3600);
    resto = duracao % 3600;
    const minutos = Math.floor(resto / 60);
    const segundos = Math.floor(resto % 60);
    console.log(`${horas}:${minutos}:${segundos}`);
  }

  conversaoTempo(N);
}
