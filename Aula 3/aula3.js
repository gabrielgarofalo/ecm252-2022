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

