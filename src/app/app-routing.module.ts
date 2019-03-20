import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import {ReadComponent} from './read/read.component';

const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'read/:id', component: ReadComponent },
    { path: 'todos', component: TodosComponent },
    { path: 'add', component: AddComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
