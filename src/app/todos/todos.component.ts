import { Component, OnInit} from '@angular/core';
import { TodosService } from '../shared/todos.service';
import { delay } from "rxjs";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todosService: TodosService;
  public loading: boolean = true;
  public filterValue: string = '';
  constructor(todosService: TodosService) {
    this.todosService = todosService;
   }

  ngOnInit(): void {
    this.todosService.fetchTodos()
    .pipe(delay(500))
    .subscribe(()=> {this.loading = false})
  }
  onChange(id:number):void {
   this.todosService.onToggle(id)
  }
  onClick(id:number):void {
    this.todosService.removeTodos(id)
   }
  }