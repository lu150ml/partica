const apresentarArrow = nome => `meu nome é ${nome}`;
//exemplos 1 
const soma = (num1,num2) => num1 + num2;

//Arrow funcion exemplo com mais de uma linha 

const somaNumerosPequenos = (num1,num2) => {
    if(num1 > 10 ||num2 > 10){
        return "soemente números de 1 a 9"
    }else {
        return num1 + num2;
    }
}