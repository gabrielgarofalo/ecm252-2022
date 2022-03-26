const express = require('express');
const app = express();
app.use(express.json());

// POST 
// host:porta/lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {

})

// GET 
app.get('/lembretes/:id/observacoes', (req, res) => {

})

app.listen(4000, () => {
    console.log('Lembretes. Porta 5000')
})
