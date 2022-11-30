const mongoose =  require('mongoose');

const ProductStatusSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    productname: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        required: true
    },
    quantity: {
        type: Intl,
        default: 1
    }
});

module.exports = mongoose.model('ProductStatus', ProductStatusSchema);