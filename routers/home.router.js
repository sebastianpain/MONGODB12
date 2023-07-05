const { Router } = require ('express')
const router = Router();
const home = []
router.get('api/home',(req,res)=>{
    res.send({
        statusCode: 200,
        payload: home
    });
});

module.exports = router;
