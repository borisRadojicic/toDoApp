const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

let id = '6b2e40663847a5131ca2057611';

// if(!ObjectID.isValid(id)) {
//     console.log('id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(JSON.stringify(todos, undefined, 5));
// });

// Todo.findById(id).then((todos) => {
//     if(!todos) {
//         return console.log('id not found');
//     }
//     console.log('To do by id: ');
//     console.log(JSON.stringify(todos, undefined, 5));
// }).catch((e) => console.log(e));

// users.findbyid - query works but no user, user not found, print errors
User.findById(id).then((users) => {
    if (!users) {
        return console.log('No users with that id');
    } 
    console.log(JSON.stringify(users, undefined, 5));
}).catch((e) => console.log(e));
