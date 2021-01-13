var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://pixcosmos:Nu49V6lN2Wd7jPaFJdph14AyrRqNZ76VdwXlDIrIl7iapKNSHnTuwMAatvGqves0h4LwW3W32WuKvojYojWK4Q==@pixcosmos.mongo.cosmos.azure.com:10255/?ssl=true&appName=@pixcosmos@', {
    useNewUrlParser: true,
    socketTimeoutMS: 5000,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.catch((err) => {
    console.log({err})
})

module.exports = {mongoose};