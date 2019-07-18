const express = require('express');
// const db = require

const app = express();

const PORT = process.env.PORT || 5000;

app.get ('/', (req, res) => {
    // db.query(`SELECT * FROM {table}`)
        // res.send
})

app.post ('/', (req, res) => {
    // db.query(`INSERT INTO {table} ({column}) VALUES (${req.body})`)
        // res.send
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
}); 