const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// Remember, the name of the DB at the end of the URI is WHAT CREATES THE DATABASE IN MONGODB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gtbc-PRO3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;