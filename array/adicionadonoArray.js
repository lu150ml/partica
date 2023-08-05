//Problema:Um professor acidentamenlte passou 3 das 4 notas de um aluno 10,6 e 8;
//para corrigir,adicione a nota 7 para a media ser calcula corretamente;


const notas = [10,6,8];

notas.push(7);

const media = (notas[0]+notas[1]+notas[2]+notas[3]/notas.length);

console.log(Math.round(media));

