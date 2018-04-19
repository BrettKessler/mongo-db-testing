const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')


// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove

// Todo.findOneAndRemove({_id: '5ad8e722d904c0ffbddcf78d'}).then((todo) => {
// 	console.log(todo);
// });


Todo.findByIdAndRemove('5ad8e722d904c0ffbddcf78d').then((todo) => {
 console.log(todo);
});

