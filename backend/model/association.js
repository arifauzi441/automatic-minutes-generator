const summarizationChunk = require("./summarizationChunkModel");
const summarization = require("./summarizationModel");

summarization.hasMany(summarizationChunk, {
    foreignKey: 'id_summarization',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    hooks: true
})

summarizationChunk.belongsTo(summarization, {
    as: 'summarization',
    foreignKey: 'id_summarization',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    hooks: true
})

module.exports = { summarization, summarizationChunk }