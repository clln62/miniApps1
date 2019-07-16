let express = require('express');

let app = express();

app.use(express.static('client'))


app.route('/')
    .get('/', (req, res) => {
    res.send('Hello World!')
})
    .post('/', (req, res) => {
    res.send('Got a POST request.')
})