const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// let newTodo = new Todo({
//     text: 'cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// const newData2 = new Todo({
//     text: 'Edit his video    '
//     // text: 'idi u Ivanjicu',
//     // completed: false,
//     // completedAt: 56
// });

// newData2.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 3));
// }).catch((err) => {
//     console.log('Unable to save data');
// });

module.exports = {Todo};