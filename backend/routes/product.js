const Product = require('../model/Product')
const errors = require('restify-errors')
const cpuUsageThrottlePlugin = require('restify/lib/plugins/cpuUsageThrottle')

module.exports = server =>{

    server.post('/products', async (req, res, next)=>{
        //console.log(req)
        
        if(!req.is('application/json')){
            return next(
                new errors.InvalidContentError("Expected 'application/json'")
            )
        }
        const { name, brand, price, description } = req.body
        
        const product = new Product({name, brand, price, description})
        
        try {
            const newProduct = await product.save();
            res.send(newProduct)
            res.send(201);
            next();
        }catch (err){
            return next(new errors.InternalError(err.message))
        }
    })
    server.get('/products', async (req, res, next) => {
        try {
          const products = await Product.find({});
          res.send(products);
          next();
        } catch (err) {
          return next(new errors.InvalidContentError(err));
        }
      });
    
/*     function postProduct(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");   
        
        product.name = req.params.name; 
        product.brand = req.params.brand;
        product.price = req.params.price; 
        product.description = req.params.description;
        
        product.save(function (){
            res.send(req.body);
        })
    
    } */
}