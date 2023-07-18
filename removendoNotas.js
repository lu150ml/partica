const notas = [10,6,8,5.5,10];
notas.pop(4);
const media = ((notas[0]+notas[1]+notas[2]+notas[3])/notas.length);


console.log(notas)

console.log(`A média do aluno é ${Math.round(media)}`);