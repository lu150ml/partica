    const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
    
//splice ele n pega o ultimo parametro indicado entao devemos e nao alter a o array original 

const sala1 = alunos.slice(0,alunos.length/2);  

const sala2 = alunos.slice(alunos.length/2);

  console.log(sala1);