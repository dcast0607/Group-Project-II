/*
----------------------------------------------------------------
For this model, we have 3 classes.
    User:           firstName, laseName, email, password
    UserSetting:    backgroundColor (or dark mode, for example)
    Event:          title, detail, eventColor, startDate, endDate
----------------------------------------------------------------
The task requires 「Calender Preferences」, where the idea coming up to my mind 
is 「background color」 and 「event color in the calender (middle)」.
Which are added into UserSetting and Event classes.
And create UserSetting just in case that we need more settings depended on user.
*/

const Event = require('./Event');
//const Preference = require('./Preference');
const User = require('./User');
const UserSetting = require('./UserSetting');

// Users could have many events.
User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Users only have one corresponded User Setting.
User.hasOne(UserSetting, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = {User, Event};