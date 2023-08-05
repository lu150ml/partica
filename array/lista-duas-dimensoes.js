const alunos = ['joao','juliana','ana','caio'];
const notas = [10,8,7.5,9];

const listaDeAlunosENontas=[alunos,notas];

console.log(listaDeAlunosENontas);

// acessando valaor especifico devlaramos primeiro o numero da lista e depois a posição do objeto ex:

console.log(`A aluna de posição 1 é: ${listaDeAlunosENontas[0][1]}
Anota dessa aluna é ${listaDeAlunosENontas[1][1]}
`
);