let express = require('express');
let bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { user } = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos })
    }).catch((e) => {
        res.status(400).send(res);
    });
});

// GET /todos/1234
app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return console.log('id not valid');
    }
    // if(!mongoose.Types.ObjectID.isValid('1234')) {
    //     return console.log('Invalid id');
    // }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send('No todos with provided id found');
            return console.log('no documents with provided id');
        }
        res.send({todo});
        //console.log(JSON.stringify(todo, undefined, 5));
    }).catch((e) => res.status(400).send());
});

// GET /todos/dhjdagjagjg

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };


