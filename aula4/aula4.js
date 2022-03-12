require("dotenv").config()

const axios = require("axios")

//const PROTOCOL = process.env.PROTOCOL
//const BASE_URL = process.env.BASE_URL
//const APP_ID = process.env.APP_ID
//const LANGUAGE = process.env.LANGUAGE
//const UNITS = process.env.UNITS

// Operador de desestruturação

const {PROTOCOL, BASE_URL, LANGUAGE, APP_ID, UNITS, Q} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APP_ID}&units=${UNITS}&lang=${LANGUAGE}&q=${Q}`
console.log(url)

axios.get(url)
.then(res => {
    console.log(res.data)
    return res.data
})
.then(res => {
    console.log(res.cnt)
    return res
})
.then(res => {
    // return res.list)
    return res['list']
})
.then(res => {
    for(let previsao of res){
        console.log(`
            Data: ${new Date(+previsao.dt * 1000).toLocaleTimeString()},
            Temperatura Mínima: ${previsao.main.temp_min}\u00B0C,
            Temperatura Máxima: ${previsao.main.temp_max}\u00B0C,
            Umidade: ${previsao.main.humidity}%,
            Descrição: ${previsao.weather[0].description}
        `)
    }
})
.then(res => {
    // exibir a qtde de previsões que tem percepção humana de temperatura acima de 30

})