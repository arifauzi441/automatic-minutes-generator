const { DataTypes } = require('sequelize')
const { db } = require('../config/db')
const summarization = require('./summarizationModel')

const summarizationChunk = db.define("summarization_chunk", {
    id_summarization_chunk: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_summarization: {
        type: DataTypes.INTEGER,
        references: {
            model: summarization,
            key: 'id_summarization'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    chunk_index: DataTypes.INTEGER,
    chunk_text: DataTypes.TEXT,
    chunk_summary: DataTypes.TEXT,
    status: DataTypes.ENUM('pending', 'processing', "done")
})

module.exports = summarizationChunk