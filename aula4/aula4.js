require('dotenv').config()

//const PROTOCOL = process.env.PROTOCOL
//const BASE_URL = process.env.BASE_URL
//const APP_ID = process.env.APP_ID
//const LANGUAGE = process.env.LANGUAGE
//const UNITS = process.env.UNITS

// Operador de desestruturação

const {PROTOCOL, BASE_URL, LANGUAGE, APP_ID, UNITS, Q} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APP_ID}&units=${UNITS}&lang=${LANGUAGE}&q=${Q}`
console.log(url)