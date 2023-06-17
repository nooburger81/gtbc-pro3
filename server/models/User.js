const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({ 
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true,
        unique: true
    },
    password: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: new Date() 
    },
 
})

const User = mongoose.model("User", userSchema, "User");
module.exports = User;