
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

const putPharmacy = async (req, res) => {
    
    try {
        await Pharmacy.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            productName: req.body.productName,
            price: req.body.price,
            discount: req.body.discount,
            stock: req.body.stock,
            statusCode: 200,
            msg: "resource updated correctly"
        });
    } catch (error) {
        res.status(500).json({
            productName: req.body.productName,
            price: req.body.price,
            discount: req.body.discount,
            stock: req.body.stock,
            msg: "Error - " + error.message,
            statusCode: 500
        })
    }

}

module.exports = {getPharmacy, postPharmacy, putPharmacy};