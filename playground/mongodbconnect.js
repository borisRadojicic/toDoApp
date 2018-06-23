//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

// let user = {
//     name: 'Boris',
//     age: 46
// };

// // destructuring user object
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo db');
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // indert new doc into users coll name age location
    // db.collection('Users').insertOne({
    //     name: 'Boris Radojicic',
    //     age: '35',
    //     locaiton: 'Belgrade'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});

