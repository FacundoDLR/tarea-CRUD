const express = require('express');
const router = express.Router();
const pharmacyController = require('../controllers/pharmacyControllers')

//LISTA DE RUTAS
router.get('/', pharmacyController.getPharmacy);

router.post('/registro', pharmacyController.postPharmacy);

router.put('/actualizar/:id', pharmacyController.putPharmacy);

router.put('/eliminar/:id', pharmacyController.deletePharmacy);

module.exports = router;