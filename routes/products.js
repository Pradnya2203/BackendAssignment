const express = require('express');
const router = express.Router();
const products = require('../models/products');



router.get('/',async (req,res) => {
    try{
        const Products = await products.find();
        res.json(Products);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/', async (req,res) => {
     const Products = new products({
        productname: req.body.productname,
        productId: req.body.productId,
        quantity: req.body.quantity
        
     });
     try{
     const savedproducts= await Products.save()
     res.json(savedproducts);
     }catch(err){
        res.json({message: err})
     }
});

router.get('/:productsId',async (req,res)=>{
    try{
        const Products = await products.findById(req.params.productsId);
        res.json(Products);
    }catch(err){
        res.json({message: err});
    }
});

router.delete('/:productId',async (req,res)=>{
    try{
        const removedproductss = await products.remove({ _id: req.params.productsId});
        res.json(removedproductss);
    }catch(err){
        res.json({message: err});
    }
});

router.patch('/:productId', async (req,res)=> {
    try{
        const updateproducts = await products.updateOne(
            {_id: req.params.productId},
            { $set: {productname: req.body.productname}},
            { $set: {quantity: req.body.quantity}}
        );
        res.json(updateproducts);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;