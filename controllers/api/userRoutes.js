// const express = require ('express')
// const path = require ('path')
// const bodyParser = require ('body-parser')
// const router = require ('express').Router()
// const signUp = require('../public/js/sign_up')

// //middleware to decode the body
// const app = express()
// app.use('/', express.static(path.join(_dirname, 'static')))
// app.use(bodyParser.json())

// app.post('/api/users/sign_up', async(req, res) => {
//     console.log(req.body)
//     res.json({ status: 'ok'})
// })
// //router.get('/', async (req, res) => {
//     //const signUpData = await signUp.findAll()
//     //return res.json(signUpData);
// //});




// ----------------------------------------------------------------

// const router = require('express').Router();
// const { Event, User, UserSetting } = require('../models');
// const withAuth = require('.../utils/auth');
// //get all user settings and JOIN with user data
// router.get('/', async (req, res) => {
//     try {
//         const userData = await User.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['id','firstname', 'lastname', 'email' ],

//                 },
//             ]
//         });
// //Serialize data for template
//         const users = userData.map((user) => user.get({ plain:true}));
// //Pass serialized data into template
//         res.render('homepage', {
//             User,
//             logged_in: req.session.logged_in
//         });
        
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/User', async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: User,
//                     attributes: [
//                         'id',
//                         'firstname',
//                         'lastname',
//                         'email'
//                     ]
                
//                 },
//             ],
//         });
//   const users = userData.get({plain: true });
  
//   req.render('User', {
//     ...users,
//     logged_in: req.session.logged_in
//   });
// }catch (err) {
//     res.status(500).json(err);
// }
// });


    


// router.get('/User', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: {exclude: ['password']},
//             include: [{model: User}],
//         });

//         const user = userData.get({ plain: true });

//         res.render('profile', {
//             ...user,
//             logged_in: true
//         });
//     }catch (err) {
//         res.status(500).json(err);
//     }
    
// });

// router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/User');
//         return;
//     }

//     res.render('login');
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

module.exports = router;