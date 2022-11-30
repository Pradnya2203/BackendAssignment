const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const {MongoClient} = require('mongodb');
require('dotenv/config');

app.use(bodyParser.json());

const prodStatRoute = require('./routes/productStatus');
const prodsRoute = require('./routes/products');
const deliveryRoute = require('./routes/delivery');

app.use('/prodStat', prodStatRoute);
app.use('/products', prodsRoute );
app.use('/delivery', deliveryRoute );

app.get('/',(req,res) =>{
    res.send('Home Page');
});

mongoose.connect(process.env.DB_CONNECTION).then(() => console
	.info('MongoDB successfully connected'))
	.catch((err) => console.error(`MongoDB connection failed: ${err}`));


app.listen(3000);