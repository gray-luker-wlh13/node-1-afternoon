const products = require('../products.json')

let getProducts = function(req, res){
    if(req.query.price){
        let items = products.filter(val => val.price >= parseInt(req.query.price))
        return res.status(200).send(items);
    }
    res.status(200).send(products);
}

module.exports = getProducts;