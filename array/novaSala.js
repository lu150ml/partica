//Temos que criar uma lista de chamada com os seguintes alunos:
//'joão','ana','caio','laura','marcos','leo'
// Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo

const sala = ['joão','ana','caio','laura','marcos','leo'];

sala.splice(1, 2, 'rodrigo');

console.log(sala);