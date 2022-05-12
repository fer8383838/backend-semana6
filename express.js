const express = require('express')
const moment = require('moment')
const Contenedor = require('./desafio')
let cont = Contenedor.p3

const app = express()
app.get('/productos', (req, res) => {
    let productos = cont.map((e) => {
        return e.tittle
    })
    return res.send(productos)
})

app.get('/productosRandom', (req, res) => {
    const ram = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    let num = ram(1, 5)
    console.log(num)
    let productos = cont.map((e) => {
        return e.tittle
    })
    let random = productos[Math.floor(Math.random()*productos.length)]
    console.log(random)
    return res.send(random)
})

const connection = app.listen(8080, () => {
    console.log(`Servidor HTTP con Express corriendo en el puerto ${connection.address().port}`)
})

app.on('error', error => console.log(error))