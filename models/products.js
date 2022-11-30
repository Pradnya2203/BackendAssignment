const mongoose =  require('mongoose');

const ProductsSchema = mongoose.Schema({
    productname: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Intl,
        default: 1
    }
});

module.exports = mongoose.model('Products', ProductsSchema);