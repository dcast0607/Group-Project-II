const Event = require('./Event');
const Preference = require('./Preference');
const User = require('./User');

User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Event.hasOne(Preference, {
    foreignKey: 'event_color',
    onDelete: 'CASCADE'
});

module.exports = {User, Event};