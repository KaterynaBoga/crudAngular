import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from './todo';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(
    private url = 'http://localhost:3000/comments',
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url)
      .pipe(
        tap(_=> this.log('выбираем задачи')),
        catchError(this.handleError('getTodos', []))
      );
  }

  addTodo(todo: Todo): Observable<>

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add('TodoService: ${message}')
  }

}
