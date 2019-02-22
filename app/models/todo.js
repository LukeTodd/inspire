export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  getTemplate() {
    return `
			<div class="card">
        <ul class="list-group list-group-flush">

          <li class="list-group-item">${this.description}<button 
          onclick="app.controllers.todoController.removeTodo('${this._id}')">X</button></li>
				</ul>
			</div>
  `}
}