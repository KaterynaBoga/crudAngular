import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { TodosComponent } from './todos/todos.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TodosComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
