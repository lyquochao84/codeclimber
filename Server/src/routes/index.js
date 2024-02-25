const express = require('express');
const router = express.Router();

const solutionRouter = require('./solution');

router.use('/solution', solutionRouter);

module.exports = router;