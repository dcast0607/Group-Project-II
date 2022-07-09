const express = require('express');
const router = express.Router();
const displayRoutes = require('./api');

router.use('/api', displayRoutes);

module.exports = router;
