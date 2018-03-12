const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

//fazendo a conexão com o banco
const connection = mysql.createConnection({
    host     : 'mysql472.umbler.com',
    port: 41890,
    user     : 'mateusguedes',
    password : 'iamdude18',
    database : 'ibmicarai'
});

connection.connect(err => {
    if(err) console.log(err)
})

port = 4000

app.use(cors())

//configurando bodyparser para pegar posts mais tarde
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

//definindo rotas
const router = express.Router()

router.get('/', (req, res) => res.send('foi'))

router.get('/clientes', (req, res) => {
    const SELECT_QUERY = 'SELECT * FROM Clientes'
    connection.query(SELECT_QUERY, (err, results, fields) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
})

router.post('/clientes', (req, res) => {
    const nome = req.body.nome
    const telefone = req.body.telefone
    const celular = req.body.celular
    const igreja = req.body.igreja
    const INSERT_QUERY = `INSERT INTO Imcontro(nome, telefone, celular, igreja) VALUES('${nome}', '${telefone}', '${celular}', '${igreja}') `
    connection.query(INSERT_QUERY, (err, results, fields) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({data: results})
        }
    })
})


app.use('/', router)

console.log('funcionando')
app.listen(port)