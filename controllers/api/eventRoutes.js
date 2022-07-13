const express = require('express');
const router = express.Router();
const path = require('path');
const { Event } = require('../../models');


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


// TODO: Add a route that fetches all events from the database, these will be displayed on the calendar. 

router.post('/user_data', async (req, res) => {
    try {
        const userEventData = await Event.findAll({ where: { userId: req.body.userId } });
        console.log(req.body);
        res.status(200).json(userEventData);
    } catch(err) {
        res.status(400).json(err);
    }
});

// TODO: Add a route that lets a user save an event, this route should also save any modifications that the user has made to the '
    // TODO: look of that event. 

router.post('/add_event', async (req, res) => {
    try {
        const eventData = await Event.create(req.body);
        console.log(req.body);
        res.status(200).json(eventData);
    } catch(err) {
        res.status(400).json(err);
    }
});
    
// TODO: Add a route that lets a user delete a saved event. The user should be able to click on an icon and delete the event. 

// TODO: Add a route that retrieves the next 3 upcoming events from the database, these will be displayed to the user on the right 
    // TODO: hand side of the page. 



// TODO: Maybe add a route that lets the user edit an event. ****

module.exports = router; 