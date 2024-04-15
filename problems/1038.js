/* Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

https://resources.beecrowd.com/gallery/images/problems/UOJ_1038_pt.png

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal. */

export function problem(lines) {
  const [item, quantidade] = lines[0].split(' ').map(parseFloat),
    lanche = [
      { codigo: 1, especificacao: 'Cachorro Quente', preco: 4.0 },
      { codigo: 2, especificacao: 'X-Salada', preco: 4.5 },
      { codigo: 3, especificacao: 'X-Bacon', preco: 5.0 },
      { codigo: 4, especificacao: 'Torrada Simples', preco: 2.0 },
      { codigo: 5, especificacao: 'Refrigerante', preco: 1.5 },
    ];
  function calcularPedido(item, quantidade) {
    const itemPedido = lanche[item - 1],
      valorPedido = itemPedido.preco * quantidade;
    console.log(`Total: R$ ${valorPedido.toFixed(2)}`);
  }
  calcularPedido(item, quantidade);
}
