const router = require('express').Router();
const Event = require('../../models/Event');
const User = require('../../models/User');
const UserSetting = require('../../models/UserSetting');
const withAuth = require('.../utils/auth');

router.get('*', async (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));

})

module.exports = router;