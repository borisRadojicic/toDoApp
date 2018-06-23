const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo db');
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result.result);
    // }, (err) => {
    //     console.log('Error deleting document:', err);
    // });

    // findOneandDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete the document: ', err);
    // });

    // db.collection('Users').deleteMany({name: 'Boris Radojicic'}).then((res) => {
    //     console.log(res.result);
    // }).catch((err) => {
    //     console.log('Unable to delete documents: ', err);
    // });

db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5b2d273b9acb871894b94fab")
}).then((result) => {
    console.log(result);
});

    // client.close();
});

