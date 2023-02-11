const express = require('express');
const router = express.Router();


const pharmacyController = require('../controllers/pharmacyControllers')

router.get('/', pharmacyController.getPharmacy);

module.exports = router;