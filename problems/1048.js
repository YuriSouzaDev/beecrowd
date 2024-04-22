/* A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


          Salário	           Percentual de Reajuste
      0 - 400.00                    15%
      400.01 - 800.00               12%
      800.01 - 1200.00              10%
      1200.01 - 2000.00             7%
      Acima de 2000.00              4%



Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo. */

export function problem(lines) {
  const salario = parseFloat(lines[0]);
  let novoSalario = 0;
  let reajuste = 0;
  let percentual;
  if (salario >= 0 && salario <= 400) {
    percentual = 0.15;
    reajuste = +salario * percentual;
    novoSalario = +salario + reajuste;
  } else if (salario >= 400.01 && salario <= 800.0) {
    percentual = 0.12;
    reajuste = +salario * percentual;
    novoSalario = +salario + reajuste;
  } else if (salario >= 800.01 && salario <= 1200.0) {
    percentual = 0.1;
    reajuste = +salario * percentual;
    novoSalario = +salario + reajuste;
  } else if (salario >= 1200.01 && salario <= 2000.0) {
    percentual = 0.07;
    reajuste = +salario * percentual;
    novoSalario = +salario + reajuste;
  } else {
    percentual = 0.04;
    reajuste = +salario * percentual;
    novoSalario = +salario + reajuste;
  }

  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: ${(percentual * 100).toFixed(0)}%`);
}
