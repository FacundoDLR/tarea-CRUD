const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const pharmacySchema = new Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true
    },
    stock: {
        type: Boolean,
        required: true,
    }
});

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

module.exports = Pharmacy;