import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Todo List";
  public isRedact: Boolean = false;
  public todos = [];
  public priorities = [1, 2, 3, 4];

  public addNewTodo(newTodo) {
    let newTodoItem = {
      label: newTodo,
      priority: 1,
      done: false,
      variableForRed: false
    };

    this.todos.push(newTodoItem);
  }

  public deleteTodo(todo) {
    this.todos = this.todos.filter(t => todo.label !== t.label);
  }

  public done(todo) {
    todo.done = true;
  }

  public inProcess(todo) {
    todo.done = false;
  }

  public redactLabel(todo) {
    todo.variableForRed = true;
  }

  public changeLabel(redactLabel, todo) {
    if (redactLabel !== "") {
      todo.label = redactLabel;
      todo.variableForRed = false;
    } else {
      todo.variableForRed = false;
    }
  }
}
