const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

// we need shema in order to add custom methods
let UserSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            minlength: 1,
            trim: true,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email'
            }
        },
        password: {
            type: String,
            require: true,
            minlength: 6
        },
        tokens: [{
            access: {
                type: String,
                require: true
            },
            token: {
                type: String,
                require: true
            }
        }]
});

// override method
UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();

    user.tokens = user.tokens.concat([{
        access,
        token
    }]);

    // chain to promise in server.js
    return user.save().then(() => {
        return token;
    });
};

UserSchema.methods.removeToken = function(token) {
    let user = this;

    return user.update({
        $pull: {
            tokens: {token}
        }
    });
};

UserSchema.statics.findByCredentials = function (email, password) {
    let User = this;

    return User.findOne({email}).then((user) => {
        if(!user) {
            return Promise.reject();
        } 

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if(res) {
                    resolve(user);
                } else {
                    reject();
                }
            });
        });
    });
};

UserSchema.statics.findByToken = function (token) {
    let User = this;
    let decoded;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
        // return new Promise((resolve, reject) => {
        //     reject();
        // })
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};


UserSchema.pre('save', function(next) {
    let user = this;
    if(user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            }); 
        });
    } else {
        next();
    }

});

const User = mongoose.model('Users', UserSchema);

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