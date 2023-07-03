const { Router } = require ('express')
const router = Router();
const carts = []
router.get('api/carts',(req,res)=>{
    res.send({
        statusCode: 200,
        payload: carts
    });
});

module.exports = router;
