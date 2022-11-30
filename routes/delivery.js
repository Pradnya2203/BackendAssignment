const express = require('express');
const router = express.Router();
const delivery = require('../models/delivery');



router.get('/',async (req,res) => {
    try{
        const Delivery = await delivery.find();
        res.json(Delivery);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/', async (req,res) => {
     const Delivery = new delivery({
        username: req.body.username,
        userId: req.body.userId,
        deliveryId: req.body.deliveryId,
        status: req.body.status
        
     });
     try{
     const saveddelivery= await Delivery.save()
     res.json(saveddelivery);
     }catch(err){
        res.json({message: err})
     }
});

router.get('/:deliveryId',async (req,res)=>{
    try{
        const delivery = await delivery.findById(req.params.deliveryId);
        res.json(delivery);
    }catch(err){
        res.json({message: err});
    }
});


module.exports = router;