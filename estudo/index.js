/*
Declaração de Variáveis

- const serve para a declaração de valores constantes
- let e var servem apenas para a declaração de variávies
- JS é uma linguagem dinamicamente tipada


//declarando constantes
const nome = "Jose";
const idade = 27;

// aspas simples e duplas têm o mesmo efeito
const sexo = "M";
const endereco = 'Rua K, 12'

//let: variável local com escopo de bloco
let a = 2;
let b = "abc";

//var: seu escopo é a função em que foi declarada ou global
var c = 2 + 3;
var d = "abcd"

var linguagem = "Javascript";
console.log("Aprendendo " + linguagem);
//nome pode ser redeclarada
var linguagem = "Java";
console.log("Aprendendo, " + linguagem);
//escopo não restrito a bloco

var idade = 18;
//exibe undefined. Ou seja, a variável já existe aqui, só não teve valor atribuído.
// Ela é içada - do inglês hoist - para fora do bloco if
console.log(`Oi, ${nome}`); // retorna undefined
if (idade >= 18) {
    var nome = "João";
    console.log(`Parabéns, ${nome}. Você pode dirigir`); // retorna o nome
}
//ainda existe aqui
console.log(`Até mais, ${nome}.`); // mantém o nome
 */
//---------------------------------------------------------------------------------------------------------------------
/*
Tipos:
- boolean
- null
- number
- string
- undefined

Objetos:
- JSON
- Array
- Classes Wrapper (String, Number, Boolean)
- Date
- Math
- Funções

const n1 = 2;
const n2 = '3';
//COERÇÃO IMPLÍCITA de n1, concatenação acontece (sem declaração de nada, ele apenas faz da forma possível)
const n3 = n1 + n2;
console.log(n3); // retorna 23 no tipo string
//coeração explícita, soma acontece (passando Number ou String)
const n4 = n1 + Number(n2)
console.log(n4) // retorna 5 no tipo number
*/
//---------------------------------------------------------------------------------------------------------------------
/*
Tipos de comparação:
- == -> Verifica apenas se valores são iguais
- === -> Verifica apenas se valores e tipos são iguais

console.log(1 == 1)//true
console.log(1 == "1") //true
console.log(1 === 1) //true
console.log(1 === "1")//false
console.log(true == 1) //true
console.log(1 == [1])//true
console.log(null == null)//true
console.log(null == undefined)//true
console.log([] == false)//true
console.log([] == [])//false
*/
//---------------------------------------------------------------------------------------------------------------------
/*  Vetores
//declaração
v1 = [];
//podemos acessar qualquer posição, começando de zero
v1[0] = 3.4;
v1[10] = 2;
v1[2] = "abc"
//aqui, v1 tem comprimento igual a 11
console.log(v1.length) // 11
//inicializando na declaração
v2 = [2, "abc", true]
console.log(v2) // [2, "abc", true]
//iterando
for (let i = 0; i < v2.length; i++) {
    console.log(v2[i]) // 2 depois abc depois true
}

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex",
    "Cristina"];
const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log(apenasComA); // [ 'Ana Maria', 'Antonio', 'Alex' ]

const res = nomes.map((nome) => nome.charAt(0));
console.log(res); // [ 'A', 'A', 'R', 'A', 'C' ]

const todosComecamComA = nomes.every((n) =>
    n.startsWith("A"));
console.log(todosComecamComA); // false

const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac, v) => ac + v);
console.log(soma); // 10
*/
//---------------------------------------------------------------------------------------------------------------------
/* Funções

Existem 3 tipos de funções:
- blocos de código com nome
- funções anônimas
- arrow functions

function hello() {
    console.log('Oi')
}
hello() // 'Oi'

//cuidado, aqui redefinimos a função sem parâmetros ou seja na 1 vai exibir undefined
function hello(nome) {
    console.log('Hello, ' + nome)
}
hello('Pedro') //'Hello Pedro'

function soma(a, b) {
    return a + b;
}
const res = soma(2, 3)
console.log(res) // 5

const dobro = function (n) {
    return n * 2;
};
const res = dobro(4);
console.log(res); // 8


//valor padrão para o parâmetro
const triplo = function (n = 5) {
    return 3 * n; // caso n não fosse definido era erro nessa linha por n indefinido
};
console.log(triplo()); // 15 como não declaramos um valor de n, ele usou o padrão da função
console.log(triplo(10)); // 30

// Arrow Function
const hello = () => console.log("Hello"); // Quando a lista de parâmetros possui um único argumento, os parênteses podem ser omitidos.
hello(); // Hello

const dobro = (valor) => valor * 2; // Quando o corpo possui uma única instrução, as chaves podem ser omitidas
console.log(dobro(10)); // 20

const triplo = (valor) => {
return valor * 3;
};
console.log(triplo(10)); // 30

//e agora?
const ehPar = (n) => { // Quando o corpo possui uma única instrução que produz um valor a ser devolvido, a instrução return é opcional: Se usar as chaves, deve-se usar o return. Caso contrário, ele não pode ser usado.
    n % 2 === 0;
};
console.log(ehPar(10)); // undefined, como não há return ou console.log ele devolve undefined e a função tem chaves, ou seja, return obrigatório
*/
//---------------------------------------------------------------------------------------------------------------------
/*
Closures

Uma função interna em conjunto com as variáveis de seu escopo externo é o que chamamos de closure.


São cidadãs de primeiro mundo e tem privilégios:
- Ser passada como argumento para uma função.
- Ser devolvida por uma função.
- Ser atribuída a uma variável.

// uma função pode ser atribuídaa uma variável
let umaFuncao = function () {
console.log ("Fui armazenada em uma variável");
}
umaFuncao() // Fui armazenada em uma variável

// f recebe uma função como parâmetro e, por isso é uma função de alta ordem. Por devolver uma função, g também é de alta ordem.

function f(funcao) {
    //chamando a função
    //note como a tipagem dinâmica tem seu preço
    funcao()
}

function g() {
    function outraFuncao() {
        console.log("Fui criada por g");

    }
    return outraFuncao;
}

//f pode ser chamada assim
f(function () {
    console.log('Estou sendo passada para f') // Estou sendo passada para f
})

//e g pode ser chamada assim
const gResult = g() // atribuição, sem a 215 não faz nada
gResult() // Fui criada por g

//e assim também
g()() // Fui criada por g

//outros testes

f(g) // f chama g, que somente devolve uma função. Nada é exibido.

f(g()) // f chama a função devolvida por g. "Fui criada por g" é exibido.

f(g()()) // f tenta chamar o que a função criada por g devolve. Ela não devolve coisa alguma. Por isso, um erro - somente em tempo de execução - acontece.

f(1) // nada é exibido pois 1 não é uma função, dá erro na funcao() da f

function f() {
    let nome = 'João';
    function g() {
        console.log(nome);
    }
    g()
}
f() // chama f que chama g, por isso João é printado

function ola() {
    let nome = 'João';
    return function () {
        console.log('Olá, João');
    }
}

let olaResult = ola();
// perceba que aqui a função ola já terminou. É de se esperar que a variável nome já não possa ser acessada.
olaResult();  // Olá, João

//também vale com parâmetros
function saudacoesFactory(saudacao, nome) {
    return function () {
        console.log(saudacao + ', ' + nome);
    }
}
let olaJoao = saudacoesFactory('Olá', 'João');
let tchauJoao = saudacoesFactory('Tchau', 'João');
olaJoao(); // Olá, João
tchauJoao(); // Tchau, João

 function eAgora(){
     let cont = 1;
     function f1 (){
        console.log (cont);
     }
     cont++;
     function f2 (){
        console.log (cont);
     }
     //JSON contendo as duas funções
     return {f1, f2}
}

let eAgoraResult = eAgora();

// neste momento, a funcao eAgora já executou por completo e a variável cont já foi incrementada. Seu valor final é mantido e, assim, ambas f1 e f2 exibirão 2.
eAgoraResult.f1(); // 2
eAgoraResult.f2(); // 2
*/
//---------------------------------------------------------------------------------------------------------------------
/*
JSON

Chave: Valor -> Dicionário de dicionários

let pessoa = {
    nome: "João",
    idade: 17,
}
//o acesso a propriedades pode ser feito com ponto
console.log("Me chamo " + pessoa.nome); // Me chamo João
//e com [] também
console.log("Tenho " + pessoa["idade"] + " anos"); // Tenho 17 anos

let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco: {
        logradouro: "Rua B",
        numero: 121,
    },
};
console.log(
    `Sou ${pessoaComEndereco.nome},
     tenho ${pessoaComEndereco.idade} anos
     e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
     número ${pessoaComEndereco["endereco"]["numero"]}`
); // Sou Maria, tenho 21 anos e moro na rua Rua B número 121

let concessionaria = {
    cnpj: "00011122210001-45",
    endereco: {
        logradouro: "Rua A",
        numero: 10,
        bairro: "Vila J",
    },
    veiculos: [
        {
            marca: "Ford",
            modelo: "Ecosport",
            anoDeFabricacao: 2018,
        },
        {
            marca: "Chevrolet",
            modelo: "Onix",
            anoDeFabricacao: 2020,
        },
        {
            marca: "Volkswagen",
            modelo: "Nivus",
            anoDeFabricacao: 2020,
        },
    ],
};
for (let veiculo of concessionaria.veiculos) {
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano de Fabricação:
    ${veiculo.anoDeFabricacao}`);
}

let calculadora = {
    //pode ser arrow function
    soma: (a, b) => a + b,
    //e função comum também
    subtracao: function (a, b) {
        return a - b;
    },
};
console.log(`2 + 3 = ${calculadora.soma(2, 3)}`); // 2 + 3 = 5
console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`); // 2 - 3 = -1
*/
//---------------------------------------------------------------------------------------------------------------------
/*
Execução Síncrona e Assíncrona

- Modelo Single Threaded:
Ambientes de execução Javascript são Single Threaded. Isso quer dizer que há um único fluxo de execução. Não há execução de código em paralelo

console.log('Eu primeiro')
console.log("Agora eu")
console.log("Sempre vou ser a última...:(")

const a = 2 + 7
const b = 5
//só faz sentido se os valores a e b já estiverem disponíveis
console.log(a + b) // 14

Entretanto, pode ser o caso de uma determinada instrução não depender de uma outra, anterior a ela, para poder executar corretamente.

function demorada() {
    const atualMais2Segundos = new Date().getTime() + 2000
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a = 2 + 3
const b = 5 + 9
const d = demorada()
// o valor de e não depende do valor devolvido pela função demorada.
const e = 2 + a + b -> fica bloqueada até d acabar
console.log(e) // 21 

function demorada() {
    const atualMais2Segundos = new Date().getTime() + 2000
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a = 2 + 3
const b = 5 + 9
//função será executada depois de, pelo menos, 500 milissegundos
setTimeout(function () {
    const d = demorada() // 12
    console.log(d)
}, 500)

//enquanto isso, essas linhas prosseguem executando
//sem ficar esperando
const e = a + b
console.log(e) // 19 -> não bloqueia

setTimeout(function () {
    console.log('dentro da timeout', 0)
})
const a = new Date().getTime() + 1000
//não esqueça do ;, única instrução no corpo do while
while (new Date().getTime() <= a);
console.log('fora da timeout') // exibe primeiro já que está antes na fila

function demorada(tempo) {
    console.log(`demorada ${tempo}`);
    const atualMaisTempo = new Date().getTime() + tempo;
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMaisTempo);
    const d = 8 + 4;
    return d;
}
setTimeout(function () { demorada(2000) }, 2000); // 3
setTimeout(function () { demorada(1000) }, 1000); // 2
console.log("chegou ao fim do script principal"); // 1

Entretanto, a leitura do arquivo, realizada pela função readFile pode executar em uma thread separada

const fs = require("fs");
const abrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`);
        } else {
            console.log(conteudo.toString());
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo);
};
abrirArquivo("arquivo.txt"); // 2

const fs = require("fs");
const abrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`);
        } else {
            console.log(conteudo.toString());
            const dobro = +conteudo.toString() * 2;
            const finalizar = function (erro) {
                if (erro) {
                    console.log('Deu erro tentando salvar o dobro')
                }
                else {
                    console.log("Salvou o dobro com sucesso");
                }
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar);
        }
    };

    fs.readFile(nomeArquivo, exibirConteudo);
};
abrirArquivo("arquivo.txt");
 
A ordem dos parâmetros de uma função callback varia. A função
exibirConteudo do Bloco de Código 3.2.1, por exemplo, recebe um objeto
com dados referentes a um possível erro e um objeto com os dados caso a
execução ocorra com sucesso, nesta ordem. Outras funções callback podem
ser chamadas com a ordem invertida. Não há garantia. É sempre necessário
vericar a documentação antes.

Promises

Trata-se de um mecanismo próprio para a manipulação de código assíncrono que visa simplicar as características inerentes ao uso de callbacks.

O uso de promises não implica na execução de código em paralelo.
A ideia é simplicar a manipulação de código cuja execução se dá de maneira
assíncrona

Uma Promise é um objeto por meio do qual uma função pode propagar um resultado ou um erro em algum momento no futuro.

Três estados:
- Pending =  Quando uma promise é produzida e o processamento associado a ela ainda não está concluído, ela está no estado Pending
- Fulfilled =  Quando o processamento associado a uma promise termina com sucesso, ela passa para o estado Fullfilled
- Rejected = Quando o processamento associado a uma promise termina com erro, ela passa para o estado Rejected

 Os estados Fullfilled e Rejected são estados finais. Uma vez que uma
promise se encontre em um desses estados, ela nunca transita para outro
estado

Uma promise pode ser criada em qualquer um dos três estados

execução encadeada

O tratamento
de resultados sempre se dá na função then e o tratamento de erros sempre se dá
na função catch.

function calculoDemorado(numero) {
    return new Promise(function (resolve, reject) {
        let res = 0;
        for (let i = 1; i <= numero; i++) {
            res += i;
        }
        resolve(res);
    });
}
calculoDemorado(10).then((resultado) => {
    console.log(resultado)
})

// Dado que o cálculo não precisa ser demorado, a função assíncrona pode devolver uma promise já no estado Fullfilled
function calculoRapidinho(numero) {
    return Promise.resolve((numero * (numero + 1)) / 2);
}
calculoRapidinho(10).then(resultado => {
    console.log(resultado)
})
//Executa primeiro, mesmo que a promise já esteja fullfilled
console.log('Esperando...')

function calculoRapidinho(numero) {
    return numero >= 0
        ? Promise.resolve((numero * (numero + 1)) / 2)
        : Promise.reject("Somente valores positivos, por favor");
}

calculoRapidinho(10)
    .then((resultado) => {
        console.log(resultado); // 2
    })
    .catch((err) => {
        console.log(err);
    });
calculoRapidinho(-1)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((err) => {
        console.log(err); // 3
    });
console.log("esperando..."); // 1


const axios = require("axios");
//sua chave aqui
const appid = "sua_chave_aqui";
//cidade desejada
const q = "Itu";
//unidade de medida de temperatura
const units = "metric";
//idioma
const lang = "pt_BR";
//quantidade de resultados
const cnt = "10"
const url = `https://api.openweathermap.org/data/2.5/fore c
cast?q=${q}&units=${units}&appid=${appid}&lang=${lang c
}& cnt=${ cnt } `;$

 //faz a requisição
 axios.get(url)
 .then((res) => {
 //mostra o resultado e devolve somente a parte de interesse
 console.log(res);
 return res.data;
 })
.then((res) => {
 //mostra o total e devolve o resultado
 console.log(res.cnt);
 return res;
 })
 .then((res) => {
 //devolve somente a lista de previsões
 console.log("aqui", res);
 return res["list"];
 })
 .then((res) => {
 //para cada resultado, mostra algumas informações
 for (let previsao of res) {
 console.log(`
 ${new Date(+previsao.dt * 1000).toLocaleString()},
 ${'Min: ' + previsao.main.temp_min}\u00B0C,
 ${'Max: ' + previsao.main.temp_max}\u00B0C,
 ${'Hum: ' + previsao.main.humidity}%,
 ${previsao.weather[0].description}
 `);
 }
 return res;
 })
 .then((res) => {
 //verifica quantas previsões têm percepção humana
de tempertura acima de 30 graus
 const lista = res.filter(r => r.main.feels_like >= 30);
 console.log (`${lista.length} previsões têm
percepção humana de temperatura acima de 30
graus`)
 });

Async/await

 A função executa de forma assíncrona. Caso em sua definição original ela
devolva um valor qualquer, uma vez que tenha sido marcada com async, ela
passa a devolver uma promise que permite a obtenção daquele valor.

 Uma chamada de função assíncrona feita por ela pode ser precedida pela
palavra await. Neste caso, a função chamada deixará de retornar uma promise imediatamente. Ela irá prosseguir com seu processamento e somente
devolver o resultado quando estiver pronto. Ela executa, portanto, como se
fosse síncrona

async function hello(nome) {
    return "Oi, " + nome;
}
const boasVindas = hello("João");
console.log(boasVindas); // Promise
boasVindas.then((res) => console.log(res)); // "Oi, João"

function fatorial(n) {
    if (n < 0) return Promise.reject("Valor não pode ser negativo");
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return Promise.resolve(res);
}

function chamadaComThenCatch() {
    fatorial(5)
        .then((res) => console.log(res))
        .catch((res) => console.log(res));

    fatorial(-1)
        .then((res) => console.log(res))
        .catch((res) => console.log(res));
}
chamadaComThenCatch();

//para usar await tem que ser async
async function chamadaComAwait() {
    //note que não há paralelismo implícito
    //somente haverá paralelismo se a função chamada utilizar explicitamente
    const f1 = await fatorial(5);
    console.log(f1);
    const f2 = await fatorial(-1);
    console.log(f2); //  Erro, não pode ser negativo
}
chamadaComAwait();
*/