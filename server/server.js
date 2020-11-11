const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const port = 5000

mongoose.connect('mongodb://localhost/memes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, async () => {
  console.log(`listening at http://localhost:${port}`)
})
