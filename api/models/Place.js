const mongoose = require('mongoose')
const {model} = require("mongoose");

const placeSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.types.objectId, ref: 'User'},
    title: String,
    address: String,
    photos: [String],
    description: String,
    features: [String],
    extraInfo: String,
    checkIn: Number,
    checkOut: Number,
    maxGuests: Number,
})

const placeModel = mongoose.model('Place', placeSchema);

module.exports = placeModel
