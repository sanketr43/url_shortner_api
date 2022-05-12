const mongoose = require('mongoose');

const ShortUrlSchema = new mongoose.Schema({
    unique_code: { type: String, required: true },
    original_url: { type: String, required: true },
    visits: { type: Number, default: 0 },
}, {timestamps: true});

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);