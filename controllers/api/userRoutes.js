const express = require('express');
const router = express.Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const UserSetting = require('../../models/UserSetting');
const { request } = require('express');

router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, PUT"
    );
    next();
  });

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
        console.log(req.body);
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json({ user: userData, message: 'Account created!' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
});

// TODO: Need to define the following routes.

router.put('/reset_password', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
    
        if (!userData) {
          res
            .status(400)
            .json({ message: 'That email does not exist in our records.' });
          return;
        };

        hashedPassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashedPassword);

        User.update(
            {
              // All the fields you can update and the data attached to the request body.
              password: hashedPassword,
            },
            {
              // Gets the books based on the isbn given in the request parameters
              where: {
                email: req.body.email,
              },
            }
          )

        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
          console.log(req.body);
          res.status(400).json(err);
      }
})


// TODO: Add a catch route. This will be used to remind the user to use a valid route.
router.post('*', async (req, res) => {
    res.status(404).json("Whoops, please make sure you use a valid route.");
})
    
// TODO: Add a route that lets the user reset their password, the user should be able to enter the following to reset their password
    // TODO: a reset token and the password they would like to use moving forward. 

module.exports = router;