
const Pharmacy = require('../models/Pharmacy');

const getPharmacy = (req, res) => {
    const pharmacy = Pharmacy.find();
    res.status(200).json(pharmacy);
}