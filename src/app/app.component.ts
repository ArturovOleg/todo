import { Component, OnInit } from "@angular/core";
import { parse } from "querystring";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "My Todo List";
  public isRedact: Boolean = false;
  public todos = [];
  public priorities = [1, 2, 3, 4];

  ngOnInit() {
    let data = this.load();
    data.createdTasks.forEach(item => this.todos.push(item));
  }

  public addNewTodo(newTodo) {
    let newTodoItem = {
      label: newTodo,
      priority: 1,
      done: false,
      variableForRed: false
    };

    this.todos.push(newTodoItem);
    this.saveTasks();
  }

  public deleteTodo(todo) {
    this.todos = this.todos.filter(t => todo.label !== t.label);
    this.saveTasks();
  }

  public done(todo) {
    todo.done = true;
    this.saveTasks();
  }

  public inProcess(todo) {
    todo.done = false;
    this.saveTasks();
  }

  public redactLabel(todo) {
    todo.variableForRed = true;
    this.saveTasks();
  }

  public changeLabel(redactLabel, todo) {
    if (redactLabel !== "") {
      todo.label = redactLabel;
      todo.variableForRed = false;
      this.saveTasks();
    } else {
      todo.variableForRed = false;
    }
  }

  public saveTasks() {
    let createdTasksArr = [];
    this.todos.forEach(item => createdTasksArr.push(item));
    localStorage.removeItem("todo");
    localStorage.setItem(
      "todo",
      JSON.stringify({
        createdTasks: createdTasksArr
      })
    );
  }

  public load() {
    return JSON.parse(localStorage.getItem("todo"));
  }
}
