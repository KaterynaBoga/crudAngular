import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:3000/comments').subscribe(data => {
      console.log(data);
    })
    
  }

}
