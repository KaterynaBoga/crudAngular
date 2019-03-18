import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from './todo';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'http://localhost:3000/todos';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url)
      .pipe(
        tap(_ => this.log('обираемо задачи')),
        catchError(this.handleError('getTodos', []))
      );
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.url}/${id}`;
    return this.http.get<Todo>(url)
        .pipe(
            tap(_ => this.log(`найдено совпадение задач id=${id}`)),
            catchError(this.handleError<Todo>(`getTodo id=${id}`))
        );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo, httpOptions)
      .pipe(
        tap((newTodo: Todo) => this.log(`додала задачу w/ id=${newTodo.id}`)),
        catchError(this.handleError<Todo>('addTodo'))
    );
  }

  deleteTodo(todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Todo>(url, httpOptions)
        .pipe(
          tap(_ => this.log(`видалила задачу id=${id}`)),
          catchError(this.handleError<Todo>('deleteTodo'))
    );
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.url, todo, httpOptions)
        .pipe(
            tap(_ => this.log(`оновила задачу id=${todo.id}`)),
            catchError(this.handleError<any>(`updateTodo`))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('TodoService: ${message}');
  }
}
