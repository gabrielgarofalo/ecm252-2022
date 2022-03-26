const express = require('express')
const app = express()
// estamos aplicando um middleware
app.use((req, res, next) => {
    console.log('oi')
    next()
})
app.use(express.json())

const lembretes = {}
contador = 0

// GET
// exemplo.com.br/lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

// POST
// exemplo.com.br/lembretes
app.post('/lembretes', (req, res) => {
    contador++
    //{texto: "Fazer Café"}
    const {texto} = req.body
    lembretes[contador] = {contador: contador, texto: texto}
    res.status(201).send(lembretes[contador])
})



app.listen(4000, () => {
    console.log('Lembretes. Porta 4000.')
})
