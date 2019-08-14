import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";
import { Todo } from "src/app/todo.model";
import { ErrorHandler } from "src/app/error-handler";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  selectedTodoIds: Array<number> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.todoService
      .getAll()
      .subscribe(
        adat => (this.todos = adat),
        error => ErrorHandler.handleError(error)
      );
  }

  onCheckboxClick(event, id) {
    if (event.target.checked) {
      this.selectedTodoIds.push(id);
    }
    if (!event.target.checked) {
      this.selectedTodoIds.splice(this.selectedTodoIds.indexOf(id), 1);
    }
    console.log(this.selectedTodoIds);
  }

  deleteTodos() {
    for (let i = 0; i < this.selectedTodoIds.length; i++) {
      for (let j = 0; j < this.todos.length; j++) {
        if (this.selectedTodoIds[i] === this.todos[j].id) {
          this.todos.splice(j, 1);
        }
      }
    }
  }

  handleDeleteClick(id) {
    this.todoService.deleteTodo(id).subscribe(
      () => {
        this.getData();
      },
      error => ErrorHandler.handleError(error)
    );
  }
}
