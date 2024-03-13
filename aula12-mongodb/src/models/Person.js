const mongoose = require('mongoose');


const useSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    idade: {
        type: Number
    }
});

// Middleware - prevenção para casos de UpperCase
useSchema.pre('save', async function (next) {
    this.email = this.email.toLowerCase();
    next();
});

const Person = mongoose.model('User', useSchema); // Schema para montagem: Modelo/ Template

module.exports = Person;
