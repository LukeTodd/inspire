export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  getTemplate() {
    return `
			<div class="">
          <p style="padding-left: 10px;" id="todo-list">${this.description}<button id="btn-style" 
          onclick="app.controllers.todoController.removeTodo('${this._id}')">x</button></p>
			</div>
  `}
}