const products = require('../products.json');

let getProduct = function(req, res){
    let item = products.find(val => val.id === +req.params.id);
    if(!item){
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(item);
}

module.exports = getProduct;