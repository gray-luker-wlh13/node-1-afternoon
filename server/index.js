const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

const port = 4020;

//endpoints 
app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});