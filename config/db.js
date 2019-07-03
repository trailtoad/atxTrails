//Mongo DB Connection
const mongoose = require('mongoose');
const keys = require('./keys');

const connectDB = async () => {
    //Try block incase there is an error
    try {
        await mongoose.connect(keys.mongoURI, { 
            useNewUrlParser: true, 
            useCreateIndex: true,
            useFindAndModify: false
        });
        
        console.log('mongoDB Connected')
    } catch (err) {
        console.log(err.message)
        //Exit process with failure
        process.exit(1)
    }
};

module.exports = connectDB;