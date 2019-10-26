
const mongoose = require("mongoose");
mongoose.promise = Promise;

mongoose
  .connect('mongodb://localhost/ptwd-server1', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


  // mongoose
//   .connect('mongodb://localhost/ptwb-server1', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });