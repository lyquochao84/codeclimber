const express = require('express');
const router = express.Router();

const solutionController = require('../app/controllers/SolutionController');

router.post('/save', solutionController.save);
router.get('/display', solutionController.display);
router.delete('/delete:id', solutionController.delete);
router.put('/update:id', solutionController.update);

module.exports = router;
