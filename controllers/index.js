const express = require('express');
const router = express.Router();
const displayRoutes = require('./displayRoutes');
const api = require('./api');

router.use('/', displayRoutes);
router.use('/api', api);

module.exports = router;
