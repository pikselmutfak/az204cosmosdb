var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// const connStr = process.env.conn_str
// app service hizmeti

mongoose.connect('', {
    useNewUrlParser: true,
    socketTimeoutMS: 5000,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.catch((err) => {
    console.log({err})
})

module.exports = {mongoose};