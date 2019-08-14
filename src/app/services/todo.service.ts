import { Injectable } from "@angular/core";
import { Todo } from "../todo.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  // public todos: Todo[] = [
  //   new Todo(1, "name1", "az"),
  //   new Todo(2, "legyenvalamiszép", "nagyonszép"),
  //   new Todo(3, "ásd fel a kertet", "ásás")
  // ];

  public uniqueId: number = 4;

  private backEndUrl = "http://192.168.5.20:4005/tasks/";

  public getAll() {
    return this.httpClient
      .get(this.backEndUrl)
      .pipe(map(t => (t as Array<any>).map(item => this.mapToDo(item))));
  }

  public mapToDo(item) {
    return new Todo(item.id, item.name, item.message, new Date(item.createdAt));
  }

  public deleteTodo(id: number) {
    return this.httpClient.delete(this.backEndUrl + "/" + id);
  }

  public deleteTodos(arr: Array<number>) {}

  public addTodo(todo: Todo) {
    // todo.id = this.uniqueId++;
    // this.todos.push(todo);
    // console.log(this.todos);
    return this.httpClient.post(this.backEndUrl, this.transformToTask(todo));
  }

  public transformToTask(todo: Todo) {
    return { id: todo.id, name: todo.name, message: todo.description };
  }

  public get(id: number) {
    // return this.todos.filter(t => t.id == id)[0];
    return this.httpClient
      .get(this.backEndUrl + "/" + id)
      .pipe(map(item => this.mapToDo(item)));
  }

  public editTodo(todo: Todo) {
    // for (let i = 0; i < this.todos.length; i++) {
    //   if (this.todos[i].id === todo.id) {
    //     this.todos[i].name = editable.name;
    //     this.todos[i].description = editable.description;
    //   }
    // }
    return this.httpClient.put(
      this.backEndUrl + "/" + todo.id,
      this.transformToTask(todo)
    );
  }

  constructor(private httpClient: HttpClient) {}
}
