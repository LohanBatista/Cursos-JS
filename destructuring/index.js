const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

console.log(numeros);

// const num1 = 1;
// const num2 = 2;

// console.log(num1, num2)

//da ná mesma coisa do acima
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 5, 5];

console.log(num1, num2, outrosNumeros);

//atribuindo um valor padrao
// const [nome = 'lohan'] = [1];
// console.log(nome);

const [nome = 'lohan'] = [];
console.log(nome);

const pessoa = {
    nome: 'lohan',
    idade: 24
}

const pessoaComTelefone = {...pessoa, telefone: 123123123}

console.log(pessoa, pessoaComTelefone);

const {idade} = pessoa;

console.log(idade);

function imprimeDados({nome, idade}) {
    console.log({nome, idade})
}

imprimeDados(pessoa);