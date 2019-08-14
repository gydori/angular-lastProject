import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/todo.model";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public delete() {
    this.deleteClick.emit(this.todo.id);
  }
}
