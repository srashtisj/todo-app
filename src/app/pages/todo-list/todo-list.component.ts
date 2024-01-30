import { Component, OnInit, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoService } from '../../services/todo.service';
import { Observable, map, shareReplay, startWith } from 'rxjs';
import { IToDosResponse } from '../../models/api/todos-response.model';
import { NgFor } from '@angular/common';
import { TodoCardComponent } from '../../components/todo-card/todo-card.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AddTodoModalComponent } from '../../components/add-todo-modal/add-todo-modal.component';
import { IToDo } from '../../models/todo.model';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent, FilterPipe, FormsModule, AddTodoModalComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {

  toDos$! : Observable<IToDosResponse>;
  searchText: string = '';
  isActive: boolean = false;

  selectedTodo : IToDo = { id: 0, todo: ''} as IToDo;

  constructor(private todoService:TodoService){
  }

  toDosResponse$ = this.todoService.getAll()
  .pipe(
    map((response)=>{
      return response
    }),
    shareReplay(1),
    startWith({
      todos:[],
      total: 0,
      skip: 0,
      limit: 0
    } as IToDosResponse)
  )

  toDosResponseSignal = toSignal(this.toDosResponse$)

  toDosSignal = computed(()=>{
    return this.toDosResponseSignal()!.todos;
  })

  ngOnInit(): void {
    this.toDos$ = this.todoService.getAll();

  }

  onAddTodo(){
    this.selectedTodo = { id: 0, todo: ''} as IToDo;
    this.isActive = true;
  }

  onSave(){
    if(this.selectedTodo){

    } else{
      
    }
  }
}
