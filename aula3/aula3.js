/*
// Devolver uma nova coleção que possui todos os elementos de v que fazem com que f produza true
function filter (v, f){
    resp = []
    v.forEach(element => {
        if(f(element)){
            resp.push(element)
        }
    });
    return resp
}

console.log(filter([1, 2, 3], e => e % 2 === 0)) // Deveria devolver [2]

// Devolver uma nova coleção que para cada elemento de v[i] possui o valor resultante de f(v[i])
function map (v, f){
    resp = []
    v.forEach(element => {
        resp.push(f(element))
    });
    return resp
}

console.log(map(['abcd', 'abc'], e => e.length)) // Deveria devolver [4, 3]

function eAgora(){
    let cont = 1
    
    function f1(){
        console.log(cont)
    }
    cont++

    function f2(){
        console.log(cont)
    }
    // isso é um objeto JSON
    return{f1, f2}
}

let res = eAgora()
res.f1()
res.f2()

// JSON JavaScript Object Notation
let pessoa = {
    nome: "José",
    idade: 17
}

console.log(pessoa.nome)
console.log(pessoa["idade"])

let p = {
    nome: "Maria",
    idade: 19,
    endereco: {
        logradouro: "Rua B",
        numero: 122
    }
}

console.log(p.endereco.logradouro)
console.log(p.endereco.numero)
console.log(p['endereco']['logradouro'])
console.log(p['endereco']['numero'])
console.log(p.endereco['logradouro'])
console.log(p['endereco'].numero)

let c = {
    cnpj: 22112211000145,
    endereco: {
        logradouro: "Rua B",
        numero: 122,
        bairro: "Vila A"
    },
    veiculos:[
        {
            marca: "Ford",
            modelo: "KA",
            ano: 1995,
            revisoes: [
                {
                    data: '14/02/1996',
                    consultor: "Fábio"             
                },
                {
                    data: '15/03/1997',
                    consultor: "João"      
                }
            ]
        },
        {
            marca: "Volks",
            modelo: "Nivus",
            ano: 2020
        },
        {
            marca: "Chevrolet",
            modelo: "Onix",
            ano: 2022
        }
    ]
}
console.log(c.veiculos[0].revisoes[1].consultor) // João
console.log(c['veiculos'][0]['revisoes'][1]['consultor']) // João

const calc = {
    soma: (a, b) => a + b,
    subtracao: function(a, b) {return a - b}
}

calc.soma = (a, b, c) => a + b + c
console.log(calc.soma(2, 3, 4))
console.log(calc.subtracao(3, 2))


function demorada(){
    const atualMais2Segundos = new Date().getTime() + 2000
    while(new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}

const a = 2 + 3
const b = 5 + 9

setTimeout(function(){
    const d = demorada()
    console.log(d)
}, 500)

const e = a + b
console.log(e)

setTimeout(function(){
    console.log("Dentro da Timeout")
}, 0)


const umSegundoNoFuturo = new Date().getTime() + 1000
while(new Date().getTime() <= umSegundoNoFuturo);

const exemplo = await axios.get('http://www...')
exemplo.then(response => console.log('abc'))
setTimeout(function(){
    console.log(exemplo)
    console.log("Dentro do timeout")
}, 0)

console.log(exemplo)


const fs = require('fs')
// função callback
const abrirArquivo = function (nomeArquivo){
    exibirConteudo = function(erro, conteudo){
        if (erro){
            console.log(`Deu Erro: ${erro}`)
            console.log("Deu Erro: " + erro)
        }else{
            let fd
            console.log(`Conteúdo: ${conteudo.toString()}`)
            const triplo = +conteudo.toString() * 3 // + converte pra number
            const finalizar = (erro) => {
                if(erro)
                    console.log("Erro ao salvar o triplo")
                else
                    console.log("Salvou com sucesso")
                    fs.close(fd)
            }
            fd = fs.writeFile('triplo.txt', triplo.toString(), finalizar)
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
}

abrirArquivo("arquivo.txt")
*/

//1 + 2 + ... + n-1 + n
function calculoDemorado(numero){
    return new Promise(function(resolve, reject){
        let res = 0
        for (let i = 1; i <= numero; i++)
            res += i
        resolve(res)
    })
}
const res = calculoDemorado(100)
res
.then((resultado) => console.log(resultado))
.catch((erro) => console.log("Falhou: " + erro))