const mongoose =  require('mongoose');

const DeliverySchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    deliveryId: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('DeliveryStatus', DeliverySchema);