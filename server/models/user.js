const mongoose = require('mongoose');

const User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// new user model email-require, trim, string, minlen 1
// create user with and without email

// const newUser = new User({
//     email: 'boris.radojicic63@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 5));
// }).catch((err) => {
//     console.log(JSON.stringify(err, undefined, 5))
// });

module.exports = {User};