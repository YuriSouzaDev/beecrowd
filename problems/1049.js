/* Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

https://resources.beecrowd.com/gallery/images/problems/UOJ_1049_b.png

Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida.*/

export function problem(lines) {
  const tiposAnimais = [
    {
      vertebrado: {
        ave: {
          carnivoro: 'aguia',
          onivoro: 'pomba',
        },
        mamifero: {
          onivoro: 'homem',
          herbivoro: 'vaca',
        },
      },
    },
    {
      invertebrado: {
        inseto: {
          hematofago: 'pulga',
          herbivoro: 'lagarta',
        },
        anelideo: {
          hematofago: 'sanguessuga',
          onivoro: 'minhoca',
        },
      },
    },
  ];

  const [grupo, especie, alimentacao] = lines;
  tiposAnimais.forEach((tipo) => {
    for (const categoria in tipo) {
      if (grupo === categoria) {
        for (const especieAnimal in tipo[categoria]) {
          if (especie === especieAnimal) {
            for (const alimentacaoAnimal in tipo[categoria][especieAnimal]) {
              if (alimentacao === alimentacaoAnimal) {
                console.log(tipo[categoria][especieAnimal][alimentacaoAnimal]);
              }
            }
          }
        }
      }
    }
  });
}
