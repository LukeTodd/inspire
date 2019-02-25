import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/luketodd/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	get Todos() {
		return _state.todos.map(t => new Todo(t))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		todoApi.get()
			.then(res => {
				let data = res.data.data.map(t => new Todo(t))
				_setState('todos', data)
				// WHAT DO YOU DO WITH THE RESPONSE?
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(event) {
		todoApi.post('', event)
			.then(res => {
				this.getTodos()
				// WHAT DO YOU DO AFTER CREATING A NEW TODO?
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		let checkBox = document.getElementById("todo-list")

		let description = _state.todos.description
		if (checkBox.checked == true) (todo.completed = true)
		else todo.completed = false

		if (checkBox.checked == true) { localStorage.setItem('todo-list', checkBox.checked) }
		// Be sure to change the completed property to its opposite
		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL
		todoApi.put(todoId, todo)
			.then(res => {
				todo = res.data.data.map(t => new Todo(t))
				_setState('todos', todo)

				// _setState('todos', data)
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
		// .catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {
				this.getTodos()
			})
		// This one is on you to write.... 
		// The http method is delete at the todoId
	}

}
