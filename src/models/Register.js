import mongoose from 'mongoose';

const RegisterSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        //not sure about type
        type: String,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    registeredAt: {
        type: Date,
        default: Date.now,
    }
});

const register = mongoose.model('Register', RegisterSchema);

export default register;