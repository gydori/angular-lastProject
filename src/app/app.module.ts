import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoComponent } from "./components/todo/todo.component";
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";
import { HomeComponent } from "./components/home/home.component";
import { TodoAddComponent } from "./components/todo-add/todo-add.component";
import { HttpClientModule } from "@angular/common/http";
import { OwnDatePipe } from './own-date.pipe';

const routes = [
  { path: "", component: HomeComponent },
  { path: "todos", component: TodoListComponent },
  { path: "todoedit/:id", component: TodoEditComponent },
  { path: "todoadd", component: TodoAddComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoComponent,
    TodoEditComponent,
    HomeComponent,
    TodoAddComponent,
    OwnDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
