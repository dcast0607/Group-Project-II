const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const displayRoutes = require('./displayRoutes');

router.use('/users', userRoutes);
router.use('/display', displayRoutes);

module.exports = router;