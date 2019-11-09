const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalSchema = new Schema({

 nameUser: String,
 fileName: String,

})
const Personal = mongoose.model('converter', personalSchema)
module.exports = Personal;