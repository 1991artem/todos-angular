import { Pipe, PipeTransform } from "@angular/core";
import { ITodo } from './todos.service';


@Pipe({
    name: 'todosFilter'
})

export class TodosFiltersPipes implements PipeTransform {
    transform(todos: ITodo[], search: string = ''): ITodo[] {
        if(!search.trim()) {
            return todos;
        } else {
            return todos.filter((todo)=>{
                return todo.title.toLowerCase().includes(search)
            })
        }
    }

}