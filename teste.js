const express = require('express')
const server = express()
const  cors = require('cors')
const router = express.Router()
let porta = process.env.PORT || 8080
const fs = require('fs')

server.use(express.json({extended: true}))
server.use(cors())

const lerArquivo = ()=> {
    const content = fs.readFileSync('./data/db.json', 'utf-8')
    return (JSON.parse(content))
}

const escreverArquivo = (conteudo) => {
    const atualizarArquivo = JSON.stringify(conteudo)
    fs.writeFileSync('./data/db.json', atualizarArquivo, 'utf-8')
}

router.get('/', (req, res)=>{
    const conteudo = lerArquivo();
    res.send(conteudo)
})

router.post('/', async (req, res)=>{

    const {id, nome, escolhido} = req.body
    const conteudoAtual = lerArquivo();
    conteudoAtual.push({id, nome, escolhido})
    escreverArquivo(conteudoAtual)
    res.send({id, nome, escolhido})
})


router.put('/:id', (req, res)=>{
    const {id} = req.params
    
    const conteudoAtual = lerArquivo();
    const itemSelecionado = conteudoAtual.findIndex((itemAtual)=> itemAtual.id == id )
    conteudoAtual[itemSelecionado].escolhido = true
    escreverArquivo(conteudoAtual)
    res.send(conteudoAtual)
})


router.delete('/', (req, res)=>{
    res.send('oi')
})


server.use(router)

server.listen(porta, ()=>{
    console.log('Servidor online em: ', `http://localhost:${porta}`)
})