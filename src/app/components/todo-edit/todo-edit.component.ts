import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Todo } from "src/app/todo.model";
import { TodoService } from "src/app/services/todo.service";
import { ErrorHandler } from "src/app/error-handler";

@Component({
  selector: "app-todo-edit",
  templateUrl: "./todo-edit.component.html",
  styleUrls: ["./todo-edit.component.css"]
})
export class TodoEditComponent implements OnInit {
  public todo: Todo;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoService.get(params.id).subscribe(
        adat => {
          this.todo = adat;
        },
        error => ErrorHandler.handleError(error)
      );
    });
  }

  public onEdit() {
    this.todoService.editTodo(this.todo).subscribe(
      () => {
        this.router.navigate(["todos"]);
      },
      error => ErrorHandler.handleError(error)
    );
  }

  public onCancel() {
    this.router.navigate(["todos"]);
  }
}
