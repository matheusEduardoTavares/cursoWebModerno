const fs = require('fs')

const path = __dirname + '/161dados.txt'

const promessa = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, conteudo) => {
        try{
            resolve(conteudo)
        }
        catch (e) {
            reject({errorFs: err, errorPromise: e})
        }
    })
})

promessa
.then(console.log)
