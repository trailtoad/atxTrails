const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    source: String,
    profileId: String,
    name: String,
    email: Array,
    avatar: Array,
    date: {
        type: Date, 
        default: Date.now
    }
});

//Telling mongoose we want to create a new collection
mongoose.model('users', userSchema)