const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a8b33ac926fb1e422957987';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todos', todo);
// });

// Todo.findById({
// 	_id: id
// }).then((todo) => {
// 	if (!todo) {
// 		return console.log('ID not found');
// 	}
// 
// 	console.log('Todo by ID', todo);
// }).catch((err) => console.log('Error'))

User.findById({
	_id: '5a8ad8e2a2cbad1eebb56ad3'
}).then((user) => {
	if (!user) {
		return console.log('ID not found');
	}

	console.log('User by ID', user);
}).catch((err) => console.log('Error'))















