const fs = require('fs')
class Contenedor {
    static id = 0
    static p3 = []
    constructor(tittle, price, thumbnail) {
        this.tittle = tittle
        this.price = price
        this.thumbnail = thumbnail
        this.id
    }

    save(p) {
        const id = Contenedor.id += 1
        this.id = id
        const json = Contenedor.p3
        json.push(p)
        const p2 = JSON.stringify(json, null, 2)

        ;
        (async () => {
            await fs.promises.writeFile('./test-desafio.txt', p2)
        })()
    }

    getById(i) {
        ;
        (async () => {
            await fs.promises.readFile('./test-desafio.txt', 'utf-8')
                .then(data => {
                    const objects = JSON.parse(data);
                    const id = i
                    const object = objects.find((e) => {
                        const isMatch = e.id === id
                        return isMatch
                    })
                    return object
                })
                .then((object) => {
                    console.log(object)
                })
                .catch((err) => {
                    console.error(err, 'hola')
                })
        })()
    }

    getAll() {
        ;
        (async () => {
            await fs.promises.readFile('./test-desafio.txt', 'utf-8')
                .then(data => {
                    const objects = JSON.parse(data);
                    console.log(objects)
                })
                .catch(() => {
                    console.error("Error al cargar")
                })
        })()
    }

    deleteById(i) {
        ;
        (async () => {
            await fs.promises.readFile('./test-desafio.txt', 'utf-8')
                .then(data => {
                    const objects = JSON.parse(data);
                    // const id = i
                    // const object = objects.find((e)=> {
                    // const isMatch = e.id === id
                    // return isMatch
                    // })
                    // return object
                    var newArray = objects.filter((e) => e.id !== i);
                    let maps = newArray.map(e => {
                        delete e.id
                        console.log(e)
                        return e
                    })
                    i = 0
                    let maps2 = maps.map(e => {
                        i++
                        //asi se agrega propiedades a un objeto
                        e.id = i
                        console.log(e)
                        return e
                    })
                    return maps2

                })
                .then((maps2) => {
                    console.log(maps2)
                    const json = JSON.stringify(maps2, null, 2)
                    fs.promises.writeFile('./test-desafio.txt', json)
                })
                .catch(() => {
                    console.error('Error al cargar')
                })
        })()
    }

    deleteAll() {
        fs.promises.readFile('./test-desafio.txt', 'utf-8')
            .then(()=>{
                fs.promises.writeFile('./test-desafio.txt', '')
            })
            .catch(() => {
                console.error('Error al cargar')
            })
        

    }
}
module.exports = Contenedor

const one = new Contenedor('one', 'two', 'three')
const two = new Contenedor('two', 'three', 'four')
const three = new Contenedor('three', 'four', 'five')
const four = new Contenedor('four', 'five', 'six')
const five = new Contenedor('five', 'six', 'seven')


one.save(one)
two.save(two)
three.save(three)
four.save(four)
five.save(five)