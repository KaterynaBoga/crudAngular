import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from './todo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'http://localhost:3000/todos';

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  getTodo(id: string): Observable<Todo> {
    const url = `${this.url}/${id}`;
    return this.http.get<Todo>(url);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.url}/${todo.id}`;

    return this.http.delete<Todo>(url, httpOptions);
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(`${this.url}/${todo.id}`, todo, httpOptions);
  }
}
