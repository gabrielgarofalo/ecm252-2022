/*
Ex 1

const variavel = 1
variavel++
console.log(variavel)

Erro na linha 2
---------------------------------------------------------------------------------------------
Ex 2

console.log(nome) // undefined
const idade = 18
if(idade>=18){
    var nome = 'João'
    console.log(nome + ' é maior de idade') // João é maior de idade
}
console.log(nome) // João

var joga para fora do if, se colocar let vai dar erro pois é restrita ao bloco
---------------------------------------------------------------------------------------------
Ex 3

const n1 = 5
let n2 = '10'
var n3 = n1 + n2 // coerção implicita -> devolve 510 como string
var n4 = n1 + Number(n2) // coerção explicita -> devolve 15 como number
console.log(n1, n2, n3, n4)
---------------------------------------------------------------------------------------------
Ex 4

const valores = [1, 2, 3, 4, 5]
const res = valores.reduce((ac, v) => {
    return v % 2 == 1 ? ac + v: ac
})
console.log(res)
 É de alta ordem pois recebe função como parâmetro arr(f, vi) sendo f uma função e depende da paridade (par ou ímpar)
 ---------------------------------------------------------------------------------------------
 Ex 5 

const soma = (a, b) => {a + b};
console.log(soma(2,3)) // undefined

exibe undefined já que tem chaves precisa do return
---------------------------------------------------------------------------------------------
Ex 6

function f1(){
    console.log('f1')
}
function f2(f){
    console.log('f2')
    f()
}
function f3(f){
    f()
    console.log('f3')
    return function(){
        console.log('f4')
    }
}
f2(f1) // f2 f1
f3(f1)() // f1 f3 f4
---------------------------------------------------------------------------------------------
Ex 7 

const fs = require("fs");
const f1 = (nome) => {
    const f2 = (erro, conteudo) => {
        if (!erro) {
            console.log(conteudo.toString());
        }
        const f3 = (erro, conteudo) => {
            if(!erro){
                console.log(conteudo.toString())
            }
        }
        fs.readFile(nome, f3)
   }
    fs.readFile(nome, f2);
};
f1("arquivo.txt"); // 2 2, sem inferno de callbacks e fs so pede nome
---------------------------------------------------------------------------------------------
Ex 8

function minhaPromise(){
    return Promise.resolve("Tudo OK!")
}

const f = () => Promise.resolve("Tudo OK!")
f().then((resultado) => {
        console.log(resultado); // Tudo OK!
    })

minhaPromise().then((resultado) => {
        console.log(resultado); // Tudo OK!
    })

Sempre devolve fulfilled
---------------------------------------------------------------------------------------------
Ex 9

const f = async () => {
    return 1
}
f()
.then(res => res)
.then(res => res + 2)
.then(res => res%2 == 1)
.then(res => console.log(res)) // true
Há quatro variáveis chamadas res. Elas possuem o mesmo nome e escopos distintos.
---------------------------------------------------------------------------------------------
Ex 10

async function f() {
    return 1
}

async function teste() {
   const r = await f()
   console.log(r)
   f().then(res => console.log(res))
   r.then(res => console.log(res))
}

teste()

r.then não existe já que foi usado o await, com await volta 1
*/
