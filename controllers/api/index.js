const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const displayRoutes = require('./displayRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/users', userRoutes);
router.use('/display', displayRoutes);
router.use('/events', eventRoutes);

module.exports = router;