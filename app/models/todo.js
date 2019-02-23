export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  getTemplate() {
    return `
			<div class="card bg-todos">
        <ul class="no-margin">

          <li id="todo-list">${this.description}<button id="btn-style" 
          onclick="app.controllers.todoController.removeTodo('${this._id}')">X</button></li>
				</ul>
			</div>
  `}
}