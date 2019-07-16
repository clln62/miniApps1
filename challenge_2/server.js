const express = require('express');
const path = require('path');

let app = express();

app.get('/', (req, res) => {
    res.json();
})

app.use(express.static('client'))

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!!</h1>')
// });

app.post('/', (req, res) => {
    res.send('Got a POST request.')
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
}); 