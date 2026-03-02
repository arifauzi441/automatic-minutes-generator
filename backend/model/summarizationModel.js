const { DataTypes } = require('sequelize')
const {db} = require('../config/db')

const summarization = db.define('summarization', {
    id_summarization: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        unique: true,
        type: DataTypes.STRING
    },
    file_path: DataTypes.STRING,
    status: DataTypes.ENUM("pending", 'processing', 'done'),
    transcript: DataTypes.TEXT,
    summary: DataTypes.TEXT
})

module.exports = summarization