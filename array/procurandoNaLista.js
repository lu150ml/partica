const alunos = ['joao','juliana','ana','caio'];
const notas = [10,8,7.5,9];

const listDeAlunosEMedias = [alunos , notas];

function exibeNomeEnota(aluno) {
    if(listDeAlunosEMedias[0].includes(aluno)) {
        console.log(`O aluno: ${aluno}, está na lista de alunos e sua nota é:`);

        const indice = listDeAlunosEMedias[0].indexOf(aluno);

        const mediaDoAluno = listDeAlunosEMedias[1][indice];

        console.log(mediaDoAluno);
    }else{
        console.log(`Aluno não encontrado!`)
    }
}

exibeNomeEnota("joao");