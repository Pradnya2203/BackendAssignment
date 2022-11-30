const express = require('express');
const router = express.Router();
const prodStat = require('../models/productStatus');

router.get('/',async (req,res) => {
    try{
        const prodStats = await prodStat.find();
        res.json(prodStats);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/', async (req,res) => {
    const ProdStat = new prodStat({
       username: req.body.username,
       userId: req.body.userId,
       productname: req.body.productname,
       productId: req.body.productId,
       quantity: req.body.quantity,
       status: req.body.status
       
    });
    try{
    const savedPost= await ProdStat.save()
    res.json(savedPost);
    }catch(err){
       res.json({message: err})
    }
});

module.exports = router;