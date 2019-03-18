// import { Component, OnInit } from '@angular/core';
//
// import { Todo } from '../todo';
// import { TodoService } from '../todo.service';
//
// @Component({
//   selector: 'app-add',
//   templateUrl: './add.component.html',
//   styleUrls: ['./add.component.css']
// })
// export class AddComponent implements OnInit {
//   todos: Todo[];
//
//   constructor(private todoService: TodoService) { }
//
//   ngOnInit() {
//   }
//
//   add(name: string, technology: string): void {
//     name = name.trim();
//     technology = technology.trim();
//     if (!name) { return; }
//     this.todoService.addTodo({ name } as Todo)
//         .subscribe(todo => {
//           this.todos.push(todo);
//         });
//   }
//
// }

import { Component } from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  technology = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  todos = new Todo(18, 'Dr IQ', this.technology[0], 'Chuck Overstreet', 'test');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.todos); }

  newTodo() {
    this.todos = new Todo(42, '', '', '', '');
  }

  showFormControls(form: any) {
    return form && form.controls['name'] &&
        form.controls['name'].value; // Dr. IQ
  }


}
