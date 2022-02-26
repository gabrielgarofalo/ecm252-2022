let a = null
console.log(a)
console.log(typeof(a)) // Para sabermos o tipo de uma variável usamos a função typeof
a = "abc"

const n1 = 2
const n2 = '3'
// Coerção Implícita
const n3 = n1 * n2
console.log(n3)
// Coerção Explícita
const n4 = n1 + n2
console.log(n4)

console.log(1 == 1) // True
console.log(1 == '1') // True -> Só ve valor
console.log(1 === 1) // True -> Tipo são iguais -> vê valor
console.log(1 === '1') // False
console.log(true == 1) // True -> Assume 1 true e o resto dos números false
console.log(true == 46515346) // False
console.log(1 == [1]) // True
console.log(1 === [1]) // False
console.log(1 == [2]) // False
console.log(1 == [1, 1]) // False
console.log(null == null) // True
console.log(null == undefined) // True
console.log(Number[1, 1]) // Undefined
console.log([] == []) // False
console.log([] === []) // False
const b = []
const c = b
console.log(a === b) // False
console.log("abc" === "abc") // True

/*
String s1 = "abc";
String s2 = "abc";

if(s1==s2) // True

String s3 = JOPtionPane.showInputDialog("Digite uma string:"); // "abc"
if(s1==s3)//false
*/

const v1 = []
console.log(v1.length)
v1[0] = 3.4
v1[2] = "abc"
v1[10] = 2
console.log(v1.length)
for(let i = 0; i <v1.length; i++){
    console.log(v1[i])
}

const v = []
console.log(v.length)
v[100] = 2
console.log(v.length)

const v2 = [2, "abc", true]
for(let i = 0; i <v2.length; i++){
    console.log(v2[i])
}

const nomes = [
    "Ana Maria",
    "Antonio",
    "Rodrigo",
    "Alex",
    "Cristina"
]

// encontrar todos os nomes que começam com A 
const apenasA = nomes.filter((nome) => {
    return nome.startsWith("A")
})
console.log(apenasA)

//OU

const resultado = nomes.every((nome) => {
    return nome.startsWith("A")
})
console.log(resultado)

// [A, A, R, A, C]
const mapeamento = nomes.map((nome) => {
    return nome.charAt(0)
})
console.log(mapeamento)

// Saber sobre detalhes do JavaScript usar o MDN Docs

const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, atual) => {
    return ac + atual
})
console.log(soma)

hello()
function hello (nome){
    console.log("Olá, " + nome + "!")    
}
hello("Gabriel")

function somaDois(a, b) {
    return a + b
}
const res = somaDois(2, 3)
console.log(res)

const dobro = function (n) {
    return 2 * n
}
const resultado_dobro = dobro(6)
console.log(resultado_dobro)

const triplo = function(n = 10) {
    return n * 3
}
const resultado_triplo = triplo(6)
console.log(resultado_triplo)

const ola = () => console.log("Olá!")
ola()

const triplo_dnvo = (n) => n * 3 // MELHOR FORMATO
console.log(triplo_dnvo(3))

const triplo_v3 = (n) => {n * 3}
console.log(triplo_v3(5))

// É A MESMA COISA QUE
const triplo_v3_op = (n) => {
    n * 3
    return undefined
}

let umaFuncao = function () {
    console.log("Fui armazenada em uma variável")
}
umaFuncao()

function f(funcao) {
    funcao()
}

function g() {
    function outraFuncao() {
        console.log("Fui criada por g")
    }
    return outraFuncao
}

f(function(){
    console.log("Estou sendo passada para a f")
})

const gResult = g()
gResult()
