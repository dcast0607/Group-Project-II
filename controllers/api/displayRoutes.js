// Brings in the require packages that will be used here. 
const express = require('express');
const router = express.Router();
const path = require('path');

// Declares the header that we will be using for our API requests. 
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// Generic route, may need to get rid of this and use the homepage route instead. 
// TODO: We are going to need to incorporate handlebars, route destination will need to change. 

router.get('/', async (req, res) => {
    res.render('login');
});

// Homepage route will be used to serve the user a login page that they can use to login into the application. 
// TODO: We are going to need to incorporate handlebars, route destination will need to change. 
router.get('/homepage', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..','public','views','login.handlebars'));
});

// Calendar route, will be used to display the events that the user has saved as well as interact with the calendar. 
// TODO: We are going to need to incorporate handlebars, route destination will need to change. 
router.get('/calendar', async (req, res) => {
    res.sendFIle(path.join(__dirname, '..', '..','public','views','layouts','mainCalendar.handlebars'));
});

//Sign up route will be used to allow the user to sign up for a local account. 
// TODO: We are going to need to incorporate handlebars, route destination will need to change. 
router.get('/sign_up', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..','public','views','signUp.handlebars'));
});

// Reset password route, will be used to allow the user to reset their password. 
// TODO: We are going to need to incorporate handlebars, route destination will need to change. 
router.get('/reset_password', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..','public','views','resetPassword.handlebars'));
});

// Generic route that allows us to handle any random link that the user may navigate to. 
// TODO: We are going to need to incorporate handlebars, route destination will need to change. 
router.get('*', async (req, res) => {
    res.render('login');
});

module.exports = router;