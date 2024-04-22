/* Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo., */

export function problem(lines) {
  const [inicial, final] = lines[0].split(' ').map(Number);
  if (inicial === final) {
    console.log('O JOGO DUROU 24 HORA(S)');
  } else if (inicial > final) {
    let horaInicial = 24 % inicial;
    let totalHoras = horaInicial + final;
    console.log(`O JOGO DUROU ${totalHoras} HORA(S)`);
  } else if (final > inicial) {
    let totalHoras = final - inicial;
    console.log(`O JOGO DUROU ${totalHoras} HORA(S)`);
  }
}
