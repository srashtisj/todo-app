import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IToDosResponse } from '../models/api/todos-response.model';
import { IToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly baseURL = 'https://dummyjson.com/todos';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IToDosResponse>{
    return this.httpClient.get(this.baseURL) as Observable<IToDosResponse>
  }

  get(id: number): Observable<IToDo>{
    return this.httpClient.get(`${this.baseURL}/${id}`) as Observable<IToDo>
  }

  getByUserId(userId: number): Observable<IToDo>{
    return this.httpClient.get(`${this.baseURL}/user/${userId}`) as Observable<IToDo>
  }

  add(todo: IToDo): Observable<IToDo>{
    return this.httpClient.post(`${this.baseURL}/add`, todo) as Observable<IToDo>
  }

  update(todo: IToDo): Observable<IToDo>{
    return this.httpClient.put(`${this.baseURL}/${todo.id}`, todo) as Observable<IToDo>
  }

  delete(id: number): Observable<IToDo>{
    return this.httpClient.delete(`${this.baseURL}/${id}`) as Observable<IToDo>
  }
}
