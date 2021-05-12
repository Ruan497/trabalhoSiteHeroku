const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static(__dirname +'/dist/trabalho'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/trabalho/index.html')
}) 

app.listen(PORT, () => {
    console.log('servidor na porta ' + PORT)
})

