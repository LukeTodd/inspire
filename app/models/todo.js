export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  getTemplate() {
    return `
			<div class="tasks">
          <input ${this.completed ? 'checked' : ''} type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" style="padding-left: 10px;" id="todo-list">${this.description}<button id="btn-style" 
          onclick="app.controllers.todoController.removeTodo('${this._id}')">x</button><br>
			</div>
  `}
}