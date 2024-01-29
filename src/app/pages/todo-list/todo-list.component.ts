import { Component, OnInit, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoService } from '../../services/todo.service';
import { Observable, map, shareReplay, startWith } from 'rxjs';
import { IToDosResponse } from '../../models/api/todos-response.model';
import { NgFor } from '@angular/common';
import { TodoCardComponent } from '../../components/todo-card/todo-card.component';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {

  toDos$! : Observable<IToDosResponse>;


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
    return this.toDosResponseSignal()?.todos;
  })

  ngOnInit(): void {
    this.toDos$ = this.todoService.getAll();

  }

}
