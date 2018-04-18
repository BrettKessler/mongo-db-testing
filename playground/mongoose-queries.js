const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')
// var id = '5ad78e71e2b2254384f191311';

// if(!ObjectID.isValid(id)) {
// 	console.log('Id is not valid');
// };

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

// User.findById

var id = '5ad6c3c3654645557537d336';

User.findById('5ad6c3c3654645557537d336').then((users) => {
	if(!users) {
		return console.log('Unable to find user');
	}

	console.log(JSON.stringify(users, undefined, 2));
}, (e) => {
	console.log(e);
});
