
const Pharmacy = require('../models/Pharmacy');

const getPharmacy = async (req, res) => {
    const pharmacy = await Pharmacy.find();
    res.status(200).json(pharmacy);
}

const postPharmacy = async (req, res) => {
    const product = new Pharmacy(req.body);
    await product.save();

    res.status(201).json({
        productName: product.productName,
        price: product.price,
        discount: product.discount,
        stock: product.stock,
        msg: "resource created"
    })
}

module.exports = {getPharmacy, postPharmacy};