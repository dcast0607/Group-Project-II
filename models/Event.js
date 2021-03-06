const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
    {
        eventId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        detail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eventColor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // If the event exists more than 1 days, it should has start and end date.
        // TODO: Consider to separate dates as year, month and day if it's more convenient.
        eventDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event',
    }
);

module.exports = Event;