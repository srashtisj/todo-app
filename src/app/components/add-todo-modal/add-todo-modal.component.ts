import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToDo } from '../../models/todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo-modal',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './add-todo-modal.component.html',
  styleUrl: './add-todo-modal.component.scss'
})
export class AddTodoModalComponent {

  @Input() todo: IToDo = {
    id: 0,
    todo: ''
  } as IToDo;

  @Input() isActive: boolean = true;
  @Output() saveTodo: EventEmitter<void> = new EventEmitter<void>();
  @Output() changeIsActive: EventEmitter<boolean> = new EventEmitter<boolean>();


  onSave(){
    this.saveTodo.emit();
  }
}
