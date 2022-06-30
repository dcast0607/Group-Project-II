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
const User = require('./User');
const UserSetting = require('./UserSetting');

// A User could has many events.
User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Define a User as having one User Setting to create a foreign key in the `UserSetting` table
User.hasOne(UserSetting, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// Also define the association starting with UserSetting
UserSetting.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = {User, Event};