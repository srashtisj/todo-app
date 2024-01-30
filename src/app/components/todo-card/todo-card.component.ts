import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToDo } from '../../models/todo.model';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {

  @Input('todo') todoItem! : IToDo;
  @Output('edit') editTodo : EventEmitter<void> = new  EventEmitter<void>();

  constructor(private todoService:TodoService){}
  onChange(){
    this.todoService.update({id: this.todoItem.id, completed: this.todoItem.completed} as IToDo).subscribe({
      next: (res)=>{
      console.log('Updated successfully!');
    },
    error:(error: any)=>{
      console.log('Error');
    }
  });
  }

}
