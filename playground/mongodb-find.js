const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo db');
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5b2d24bfeb8de7319cc87d5f")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch to do.')
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos');
    //     console.log(`Todos count ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch to do.')
    // });

    db.collection('Users').find({
        name: 'Boris Radojicic'
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch to do.')
    });

    // client.close();
});

