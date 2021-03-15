const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.set('port', 3000);

let contador = 3;
const clientes = [
    {
        id: 1,
        nome: 'Joao',
        email: 'joao@email.com'
    },
    {
        id: 2,
        nome: 'Cristina',
        email: 'cristina@email.com'
    }
]


app.get("/clientes", (req, res) => {
    return res.send(clientes);
});

app.post('/clientes', (req, res) => {
    const cliente = req.body;
    clientes.push({ id: contador += 1, nome: cliente.nome, email: cliente.email });
    console.log(clientes);
    res.end();
})

app.post('/clientes', (req, res, next) => {
    const cliente = req.body;
    clientes.push({ id: contador += 1, nome: cliente.nome, email: cliente.email });
    console.log(clientes);
    res.status(201).json(clientes);
})

app.put('/clientes/:id', (req, res) => {
    const { id } = req.params.id
    const { nome, email } = req.body
    const cliente = clientes.find(cliente => cliente.id == id)

    if (cliente) {
        cliente.nome = nome
        cliente.email = email
        return res.json(cliente)
    }

    return res.status(404).send()
})

app.delete('/clientes/:id', (req, res) => {
    const { id } = req.params
    const index = clientes.findIndex(cliente => cliente.id == id)

    if (index) {
        clientes.splice(index, 1)
        return res.status(200).send()
    }

})

const server = http.createServer(app);
server.listen(3000);