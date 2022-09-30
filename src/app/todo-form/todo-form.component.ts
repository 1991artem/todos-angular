import { Component, OnInit } from '@angular/core';
import { TodosService, ITodo } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  public todosService: TodosService;
  public title: string = '';
  constructor(todosService: TodosService) {
    this.todosService = todosService;
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo: ITodo = {
      id: this.todosService.todos.length+1,
      title: this.title,
      complited: false
    }
    this.todosService.addTodo(todo);
    this.title = '';
  }

}
