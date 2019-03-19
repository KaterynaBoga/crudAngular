import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {  

  todoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    technology: new FormControl(''),
    description: new FormControl(''),
    customer: new FormControl(''),
  })
  
  todo = new Todo(
    this.todoForm.value.name, 
    this.todoForm.value.technology,
    this.todoForm.value.description,
    this.todoForm.value.customer,
    this.todoForm.value.id
  )

  constructor(
    private todoService: TodoService
  ) { }
  submitted = false;

  onSubmit() {
    console.log(this.todoForm.value);

    const newTodo = new Todo(
      this.todoForm.value.name, 
      this.todoForm.value.technology,
      this.todoForm.value.description,
      this.todoForm.value.customer,
      this.todoForm.value.id
    )

    this.todoService.addTodo(newTodo).subscribe((todo) => {
      console.log(todo);
    })
  }

  newTodo() {
    this.todo = new Todo('', [], '', '', '');
  }
}
