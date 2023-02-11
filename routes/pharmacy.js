const express = require('express');

const router = express.Router();

router.get('/', usersController.getPharmacy);

module.exports = router;