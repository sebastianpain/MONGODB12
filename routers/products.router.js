const { Router } = require ('express')
const router = Router();
const products = []
/*router.get('api/products',(req,res)=>{
    res.send({
        statusCode: 200,
        payload: products
    });
})*/;
router.get('/',(req,res)=>{
    
    products.create({
        name:'i phonex',
        class:'celular',
        price : 398764,
})

.then(products =>{
    res.send({message:'product created', product})
})
.catch(err =>{
    res.status(500).send(err)
})
});
router.post('/api/products',(req,res)=>{
    const product= {
        id: user.length + 1,
        ...req.body // spread operator
    } ;
    product.push(products)
res.send({
    statusCode:200,
    payload:product
})
})
module.exports = router;
