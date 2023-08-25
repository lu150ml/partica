const alunos = ['joao','juliana','ana','caio'];
const notas = [10,8,7.5,9];

const listDeAlunosEMedias = [alunos , notas];

function exibeNomeEnota(aluno) {
    if(listDeAlunosEMedias[0].includes(aluno)) {
        console.log(`O aluno: ${aluno}, está na lista de alunos e sua nota é:`);
        const alunos = listDeAlunosEMedias [0];
        const notas = listDeAlunosEMedias [1];

        const indice =alunos.indexOf(aluno);

        const mediaDoAluno = notas [indice];

        console.log(mediaDoAluno);
    }else{
        console.log(`Aluno não encontrado!`)
    }
}

exibeNomeEnota("juliana");