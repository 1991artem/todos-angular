import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, tap } from "rxjs";

export interface ITodo {
    id: number;
    title: string;
    complited: boolean;
    date?: any;
  }


@Injectable({providedIn: 'root'})

export class TodosService {
    public todos: ITodo[] = [];
    constructor(private http: HttpClient){}
    fetchTodos(): Observable<ITodo[]>{
        return this.http.get<ITodo>('https://jsonplaceholder.typicode.com/todos?_limit=30')
            .pipe(tap((todos: any) => this.todos = todos));
    }
    onToggle(id:number){
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].complited = !this.todos[index].complited;
    }
    removeTodos(id:number){
        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos.splice(index,1)
    }
    addTodo(todo: ITodo){
        this.todos.push(todo)
    }
}