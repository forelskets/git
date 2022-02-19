const express = require('express');
const router = express.Router();

const applicationController = require('../controller/applicationController');

// router.get('/:id', bankController.getBankById);
router.get('/', applicationController.getApplicationList);
// router.post('/', bankController.createBank);
// router.put('/:id', bankController.updateBank);
// router.delete('/:id', bankController.deleteBank);

module.exports = router;
