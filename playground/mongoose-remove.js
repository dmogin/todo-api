const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findByIdAndRemove('5a8e42dff451c614d062849a').then((result) => {
	console.log(result);
});






