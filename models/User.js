const mongoose = require('mongoose');

// User Model
const userSchema = new mongoose.Schema({
    // Fields for User Model
    // ...
});

const User = mongoose.model('User', userSchema);

// Admin Model
const adminSchema = new mongoose.Schema({
    // Fields for Admin Model
    // ...
});

const Admin = mongoose.model('Admin', adminSchema);

// Content Model
const contentSchema = new mongoose.Schema({
    // Fields for Content Model
    // ...
});

const Content = mongoose.model('Content', contentSchema);

module.exports = { User, Admin, Content };
