import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
      private route: ActivatedRoute,
      private todoService: TodoService,
      private location: Location
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id)
        .subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }

}
