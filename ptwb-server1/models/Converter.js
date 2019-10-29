const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const converterSchema = new Schema({

 fileType: String,

})
const Converter = mongoose.model('converter', converterSchema)
module.exports = Converter;
