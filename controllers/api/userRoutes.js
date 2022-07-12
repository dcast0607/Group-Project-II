// const express = require ('express')
// const path = require ('path')
// const bodyParser = require ('body-parser')
// 
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
const { User } = require('../../models');
const path = require ('path');
const bodyParser = require ('body-parser');


// TODO: Add a route that lets the user submit authentication credentials [ Email and Password ]
router.post('/sign_in', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
        console.log(req.body);
        res.status(400).json(err);
    }
});

// TODO: Add a route to handle logout.
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

// TODO: Add a route that lets the user sign up for an account of their own. [ First Name, Last Name, Email Address, Password ]
// TODO: this route should create a user on our database. 
router.post('/sign_up', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
});

// TODO: Need to define the following routes.


    
// TODO: Add a route that lets the user reset their password, the user should be able to enter the following to reset their password
    // TODO: a reset token and the password they would like to use moving forward. 

module.exports = router;