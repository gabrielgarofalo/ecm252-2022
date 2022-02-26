// Declaração de variáveis  -> Não precisamos declarar tipo (compilador já sabe)
const nome = "José" // Para string aspas simples ('') e duplas ("") tem o mesmo efeito
const endereco = `Rua K,
 12` // Usando crase podemos continuar a string em mais de uma linha
const sexo = 'M' // Se colocarmos a simples, a dupla pode ir dentro sem problema e vice-versa
const idade = 27

// Como a tipagem é dinâmica podemos fazer isso, perguntamos o tipo do objeto referenciado
let a = 2
a = "abc"

/* 
Usando o const deixamos o valor constante, ou seja, não podemos alterar ao longo do programa, já o let pode ser reatribuído, ou seja, se puder reatribuir usar let,
 caso contrário usar const 
*/

 let b = 2
b = 3 // CERTO

const c = 2
c = 3 // ERRADO

// Usando o var também podemos reatribuir, só que let é mais novo, portanto usamos o let 
var c = 2 + 3
c = 6

// var é global enquanto o let é local, portanto em funções usar let

var linguagem = "JavaScript"
console.log("Aprendendo " + linguagem)
var linguagem = "Java" // O problema do var é que a variável pode ser redeclarada
console.log("Aprendendo " + linguagem)

// Para executar com node só colocar -> node + nome_arquivo.js

var idade = 18
console.log("Oi, " + nome) // Como o nome não está declarado e usamos o var ele vai deixar como undefined, se usarmos o let ele vai quebrar direto
if (idade >= 18)
{
    var nome = "João"
    console.log("Parebéns, " + nome)
    console.log("Você pode dirigir!")
}

console.log("Até mais " + nome)

/*
- Usando o var tudo que está abaixo dele é reconhecido, mas o que está a cima não, então ele substitui tudo por undefined
- A variável nome existe mas já que ainda não foi preenchida fica como undefined
- Se usarmos o let na 38 com a linha 35 comentada , ele vai funcionar na 39 mas vai quebrar na 43 já que let é local
- No caso do let a variável nome não existe, por isso vai dar erro de cara na 35 
*/

/*
Exemplo de como dar commit pelo terminal
git init
git config --global user.name "Fulano de Tal" (local é para manter no repo, global é user do so, system é do PC geral)
git config --global user.email fulanodetal@exemplo.br
git add arquivo.js
OBS: para checar status git status - s (?? -> Não está no controle de versão/ A -> Está no controle de versão (se estiver verde pode dar commit))
git commmit -m "mensagem"
git remote add (nome) (link HTTPS) (link do repositório local para remoto)
git branch (ver nome da branch)
git push (nome) (nome branch)
fazer login se está com HTTPS, SSH vai direto
*/