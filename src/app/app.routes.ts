import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

export const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [

    { path: '', component: TodoListComponent }
  ]}
];
