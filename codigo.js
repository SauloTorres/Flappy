cumprimenta = nome => `olá ${nome}!`
converterIdade = idade => idade * 365
calculaSalario = (salario, dias) => `Seu salário é ${salario * dias}!`
segundoMaior = numeros => numeros.sort((a,b) => b-a)[1]
const filtrarPorQuantidadeDeDigitos = (numeros,qtd) => numeros.filter(numeros => String(numeros).length === qtd)
function simboloMais(qtd) {
    let mais = ''
    for (i =0; i<=qtd ; i++){
        mais +='+'
    }
    return mais
} 
    
console.log(simboloMais(2))

function sorte (numero){
    const sorteio = Math.floor(Math.random() * 10)
    numero == sorteio ? console.log('Ganhou o prêmio', sorteio) : console.log('Se fudeu', sorteio)
}

numeroPalavras = frase =>  `Esta frase tem ${frase.split(" ").length} palavras!`


function media(numeros){
    let soma = 0 
    qtd = numeros.length
    for(element of numeros)  {
        soma += element
        console.log(soma)
    }
    return soma/qtd
}

function despesasTotais(...produtos){
    let soma = 0 
    for(element of produtos)  {
        soma += element.preco
    }
    return console.log(soma)
}

function contarCaractere(letra,frase){
    let soma = 0 
    for(element of frase)  {
        letra === element ? soma++ : null
    }
    return console.log(soma)
}

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const mediaa = array => soma(array) / array.length


// console.log(Object.entries(estudantes).map( estudante => {
// return { nome: estudante[0], media: soma(estudante[1]) }}
// ))





console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) )