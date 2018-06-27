const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5b335a085b2165f5264eed16').then((todo) => {
    console.log(JSON.stringify(todo, undefined, 4));
}).catch((e) => console.log('Unable to delete', e));

// Todo.findOneAndRemove({_id: '5b335a085b2165f5264eed16'}).then((todo) => {
//     console.log(JSON.stringify(todo, undefined, 4));
// }).catch((e) => console.log('Unable to delete', e));