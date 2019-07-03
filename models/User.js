const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    email: Object,
    avatar: Object,
    date: {
        type: Date, 
        default: Date.now
    }
});

//Telling mongoose we want to create a new collection
mongoose.model('users', userSchema)