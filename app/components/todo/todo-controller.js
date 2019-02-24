import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let template = ''
	let todos = _todoService.Todos
	todos.forEach(todo => {
		template += todo.getTemplate()
	})
	document.querySelector('#todos').innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()

		// Don't forget to add your subscriber
	}

	addTodo(event) {
		event.preventDefault()
		let form = event.target
		let formTodo = {
			description: form.description.value
		}
		form.reset()
		_todoService.addTodo(formTodo)
		_drawTodos()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
