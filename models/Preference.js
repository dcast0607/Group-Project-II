const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Preference extends Model {}

Preference.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        backgroundColor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eventColor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
    }
);

module.exports = Preference;
