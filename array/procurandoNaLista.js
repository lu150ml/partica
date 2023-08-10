const alunos = ['joao','juliana','ana','caio'];
const notas = [10,8,7.5,9];

const listDeAlunosEMedias = [alunos , notas];

function exibeNomeEnota(aluno) {
    if(listDeAlunosEMedias[0].includes(aluno)) {
        console.log(`O aluno: ${aluno}, está na lista de alunos e sua`)
    }else{
        console.log(`Aluno não encontrado!`)
    }
}

exibeNomeEnota("joao");